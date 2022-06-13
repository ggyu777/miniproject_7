import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Clip from './Clip/Clip';
import Main from './Main/Main'

function App() {
  return (
    <>   
    <Routes>
     <Route path='/' element={<Main/>} />
     <Route path='/clip' element={<Clip/>} />
   </Routes>
   <div>하이</div>
   </>

  );
}

export default App;
