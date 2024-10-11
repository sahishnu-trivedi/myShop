import React, { useState } from 'react'
import './checkbox.css';

function Checkbox({label, value, checkBoxHandler, className=''}) {

  return (
    <div className="form-group">
      <input type="checkbox" className="custom-input" id={value} value={value} onChange={checkBoxHandler} />
      <label className={className} htmlFor={value}>{label}</label>
    </div>
  )
}

export default Checkbox