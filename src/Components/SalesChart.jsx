// src/components/SalesChart.js
import React from 'react';
import imagesd from '../assets/kaveri-vidya-samsthe.webp';

const SalesChart = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <img 
        src={imagesd} 
        alt="Sales Chart Placeholder" 
        style={{ maxWidth: '90%', height: 'auto'}} 
      />
    </div>
  );
};

export default SalesChart;
