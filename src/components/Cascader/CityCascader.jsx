import React from 'react'
import './Cascader.css'
export default function CityCascaders(props) {
  const {getWeatherData}=props;
  const GetNewApi=(value)=>{
    getWeatherData(value)
  }
  const InputValue=(e)=>{
    if(e.keyCode=='13'){
      getWeatherData(e.target.value);
      e.target.value=''
    }
    }
  return (
    <div className='Cascader'>
      <p>城市编号</p>
      <input  onKeyUp={InputValue} onChange={InputValue} className='input' ></input>
    </div>
  )
}
