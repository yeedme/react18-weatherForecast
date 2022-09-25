import React from 'react'
import './Cascader.css'
export default function CityCascaders(props) {
  //修改 weatherdate
  const {getWeatherData}=props;
  //按下回车 发送数据并 清空输入框
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
