import './App.css';
import React, { useEffect, useState } from 'react';
import { OneStationNmAutoFetch } from './modules/SingleStation';
import MultiStationNm from './modules/MultiStation';
import { SW } from './config-app';
import { getApi } from './commons/fetch-data/fetch';
import * as _ from 'lodash';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [listStationNM, setListStationNM] = useState([]);
  const [idStationNM, setIdStationNM] = useState(null);
  useEffect(() => {
    fetchListStationNM();
  }, []);

  // Action get list station NM
  const fetchListStationNM = async () => {
    try {
      const res = await getApi(SW, '')
      if (res.data.success) {
        setListStationNM(res.data.data)
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.log('Error', error)
    }
  };

  const Home = () => {
    return (
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          // justifyContent: 'center',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        }
        }
      >
        <div className="text-center m-5">
          <div className="fs-1 text-title">
            <p>MÀN HÌNH LED</p>
          </div>
          <div className="fs-5 text-sub-title" >
            Lựa chọn màn hình trình chiếu
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            height: '100%',
            width: '100%'
          }
          }
        >
          <div
            className="flex-column w-25 h-75 m-4 d-inline-flex align-items-center rounded shadow"
            style={{ background: 'linear-gradient(to left, #fc466b, #3f5efb)' }}
          >
            <div className="fs-1 text-title">
              <p>Một trạm</p>
            </div>
            <a className="w-50 a" href='/single'>
              <button className="w-100 h-75 shadow main-button text-button fs-3">
                Lựa chọn
              </button>
            </a>
          </div>
          <div
            className="flex-column w-25 h-75 m-4 d-inline-flex align-items-center rounded shadow"
            style={{ background: 'linear-gradient(to left, #fc466b, #3f5efb)' }}
          >
            <div className="fs-1 text-title">
              <p>Nhiều trạm</p>
            </div>
            <a className="w-50 a" href='/multiple'>
              <button className="w-100 h-75 shadow main-button text-button fs-3">
                Lựa chọn
              </button>
            </a>
          </div>
        </div >
      </div>

    );
  };

  return (
    <div className="position-absolute w-100 h-100">
      <div className="position-absolute back-ground-css"></div>
      <Router>
        <Routes >
          <Route path="/single" element={<OneStationNmAutoFetch />} />
          <Route path="/multiple" element={<MultiStationNm />} />
          <Route path="/" element={<Home />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
