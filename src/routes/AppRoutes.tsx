import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Qsomos from '../pages/www/site/Qsomos';
import Home from '../pages/www/site/Home';
import { Servicios } from '../pages/www/site/Servicios';

export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Qsomos" element={<Qsomos />} />
        <Route path="/Servicios" element={<Servicios />} />

      </Routes>
    );
  };
  
export default AppRoutes;