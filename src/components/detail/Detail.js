import React, { useEffect, useState } from 'react'
import './Detail.css'
export default function Detail(props) {
  const {shidu,pm10,pm25,wendu}=props.currentWeather
  const {Colorid,Color}=props
  useEffect(()=>{
   
  })
  return (
    <div className='Detail' >
      <div>
        <p className='WeatherNum' style={{color:Color}}>{Colorid}</p>
      </div>
      <div className='WeatherDetail'>
          <h2 className='TempaNumber'>今日天气</h2>
          <h2 className='TempaNumber'>现在:{wendu}°</h2>
          <p>湿度:{shidu}</p>
          <p>PM2.5:{pm25}</p>
          <p>PM10:{pm10}</p>
        </div>
    </div>
  )
}
