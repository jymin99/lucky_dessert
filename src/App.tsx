import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './page/MainPage';


const App:React.FC=()=>{

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default App
