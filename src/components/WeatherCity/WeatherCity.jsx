import React from 'react'
import './WeatherCity.css'

import axios from 'axios'
export default function WeatherCity(props) {
  const {setweatherDate}=props
  const getCityDate=()=>{
    axios.get(`http://localhost:8082/`).then(
      reponse=>{
        console.log('well done',reponse.data);
        setweatherDate(reponse.data);
      },
      error=>{console.log('fuck error');}
    )

  }
  
  return (
    <div className='WeatherCityContent'>
      <div>
        <button  className="WeatherCity-AddCity" >其他城市</button> 
      </div>
      <div>北京</div>
    </div>
  )
}
