import React, { useState } from 'react';
import "./App.css";

const InputComponent = ({ label, value, onChange }) => {
  return (
    <div className='InputComp'>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
