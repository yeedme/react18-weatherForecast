import React, { useEffect } from 'react'
import './Cogs.css'
export default function Cogs(prpos) {
  const {Temperature,ChangeColor,Color}=prpos
  
  return (
    <div className='CogsContent-Right' style={{backgroundColor:Color}}>
      <div  className='CogsList-Right' >
        {/* 渲染数据 */}
          {
            Temperature.map((t,index)=>{
                return <div key={index} 
                onClick={()=>ChangeColor(t.high)} 
                className='CogsItem'
                > 
                  <h1 >{t.low}°~{t.high}°</h1>
                  <h2>{t.ymd}</h2>
                  <p>{t.type}</p>
                  </div>
            })
          }
      </div>
    </div>
  )
}
