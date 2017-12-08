import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './navbar';

const MainLayout = ({ children, authenticated }) => (
    <div className="app-wrapper">
      <Navbar authenticated={authenticated} />
      <div className='container'>
        {children}
      </div>
    </div>
);

export default MainLayout;
