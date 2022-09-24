import React from 'react'
import './WeatherCity.css'
import CityCascader from '../Cascader/CityCascader'
export default function WeatherCity(props) {
  const {setweatherDate,getWeatherData,city}=props




  return (
    <div className='WeatherCityContent'>

    <CityCascader getWeatherData={getWeatherData} className='WeatherCity-AddCity'/>

      <div>{city}</div>
    </div>
  )
}
