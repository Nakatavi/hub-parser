// 
import React, { useState } from 'react';
import './App.css';
import {RouterProvider } from 'react-router-dom';
import { routing } from './services/routing';
import Header from './components/header/header';

const App = () => {

  const [currentRoute, setCurrentRoute] = useState('/');
  const handleBackButtonClick = () => {
    console.log('Home');
    setCurrentRoute('/'); 
    };
  return(
    <>
      <Header element={<Header onBackButtonClick={handleBackButtonClick} />} />
      <RouterProvider router={routing} />
    </>
  );
} 

export default App;