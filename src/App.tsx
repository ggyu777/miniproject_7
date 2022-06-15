import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Clip from './Clip/Clip';
import Main from './Main/Main'
import { useSelector } from 'react-redux';

function App() {
  return (
    <>   
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/clip' element={<Clip/>} />
      </Routes>
    </>

  );
}

export default App;
