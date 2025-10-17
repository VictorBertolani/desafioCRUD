import React, {ReactHTMLElement, useState, useEffect} from 'react';
import axios from 'axios';
import {Users} from '../Types/Users';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';


function App() {
return(

  <div className='App'>
    <Navbar />

    <div className='container'>
      <Outlet />
    </div>

  </div>

)
  
}

export default App;