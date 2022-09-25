import React, { useEffect, useState } from 'react'
import Cogs from '../cogs/Cogs' //组件
import Detail from '../detail/Detail'//组件
import HotToWild from './colorDate.js'//组件
import WeatherCity from '../WeatherCity/WeatherCity'//颜色数据
import axios from 'axios'
import './index.css'

export default function Weather() {
  const [Color,setColor]=useState('white');//改变右侧栏和大数字的颜色
  const [Colorid,setColorid]=useState(30);//当前温度 （id）
  const [weatherDate,setweatherDate]=useState(false)
  //用于改变 右侧天气和大数字的颜色 
  const ChangeColor=(id)=>{
    setColorid(id);
    const temp=HotToWild.find((t)=>t.id===id);
    if(temp==undefined){
      setColor('#445c8d')
    }
    
    setColor(temp.color);
  }
  //发生请求获取数据

  const getWeatherData = async(api)=>{
    console.log(api);
    const result = await axios.get( `http://localhost:8082/?id=${api}`)
    .then(resp=>{
      setweatherDate(resp.data);
      ChangeColor(resp.data.currentWeather.wendu)
    },error=>{
     console.log(error);
    });
  }
  
  useEffect(()=>{
    getWeatherData('101010100');
  },[])

  return (
    <div>
      {/*判断请求的数据是否加载完成 */}
    {weatherDate===false?
    (<div>two</div>):
    (<div className='weather'> 
        <WeatherCity setweatherDate={setweatherDate} getWeatherData={getWeatherData} city={weatherDate.currentWeather.city}/> 
          <div className='MiddleContent' >
            <Detail currentWeather={weatherDate.currentWeather} Colorid={Colorid} Color={Color} />
            <div className='temp'></div>  
          </div>
        <Cogs setColor={setColor} ChangeColor={ChangeColor} Temperature={weatherDate.Temperature} Color={Color}/>
      </div>)
    }
    </div>
  )
}
