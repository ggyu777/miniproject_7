import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Clip from './Clip/Clip';
import Main from './Main/Main'
import { useSelector } from 'react-redux';

function App() {
  const b = useSelector((state:any) => state.list);

  console.log(b)
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
