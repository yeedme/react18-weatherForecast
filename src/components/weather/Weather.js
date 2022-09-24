import React, { useEffect, useState } from 'react'
import Cogs from '../cogs/Cogs' //组件
import Detail from '../detail/Detail'//组件
import HotToWild from './colorDate.js'//组件
import WeatherCity from '../WeatherCity/WeatherCity'//颜色数据
import Charts from '../charts/Charts'//组件
import axios from 'axios'
import './index.css'
let k={
  currentWeather: { shidu: '23%', pm25: 5, pm10: 30, wendu: '18' },
  Temperature: [
    { high: '36', low: '12', ymd: '09月23日', type: '晴' },
    { high: '34', low: '12', ymd: '09月23日', type: '晴' },
    { high: '32', low: '12', ymd: '09月23日', type: '晴' },
    { high: '28', low: '12', ymd: '09月23日', type: '晴' },
    { high: '24', low: '17', ymd: '09月26日', type: '晴' },]
}
export default function Weather() {
  const [Color,setColor]=useState('white');//改变右侧栏和大数字的颜色
  const [Colorid,setColorid]=useState(30);//当前温度 （id）
  const [weatherDate,setweatherDate]=useState(k)
  //用于改变 右侧天气和大数字的颜色 
  const ChangeColor=(id)=>{
    console.log(typeof id+' id:'+id);
     setColorid(id);
    const temp=HotToWild.find((t)=>t.id===id) 
    console.log('color:'+temp.color);
    setColor(temp.color);
  }
  //发生请求获取数据

  const getWeatherData = async()=>{
    const result = await axios.get( `http://localhost:8082/`)
    .then(resp=>{
      setweatherDate(resp.data);
    },error=>{
     console.log(error);
    });
  }

  useEffect(()=>{
   // getWeatherData();
  },[])

  return (
    <div>
      {/*判断请求的数据是否加载完成 */}
    {weatherDate===false?
    (<div>two</div>):
    (<div className='weather'> 
        <WeatherCity setweatherDate={setweatherDate}/> 
          <div className='MiddleContent' >
            <Charts/>             
            <Detail currentWeather={weatherDate.currentWeather} Colorid={Colorid} Color={Color} />  
          </div>
        <Cogs  ChangeColor={ChangeColor} Temperature={weatherDate.Temperature} Color={Color}/>
      </div>)
    }
    </div>
  )
}
