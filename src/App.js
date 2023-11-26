import React, { useState,useEffect } from 'react';
import './App.css';
import {RouterProvider } from 'react-router-dom';
import { routing } from './services/routing';

import Login from './components/header/login'
const App = () => {
  
  return(
    <>
        <RouterProvider router={routing} />
      
    </>
  );
} 

export default App;

