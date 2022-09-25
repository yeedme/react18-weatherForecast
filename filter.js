
//用于过滤字符串  '高温 27°C' ----> '27'
 const fillTemperature=(unfillTemperature)=>{ 
    return  unfillTemperature.substring(0,unfillTemperature.length-1).slice(3)
 }
 ////用于过滤字符串  '2022-01-1' ----> '01月01日'
 const fillDate=(unfillDate)=>{ 
    return  unfillDate.substring(5,unfillDate.length).replace('-','月')+'日';
 };

// let {shidu, pm25,wendu}=t
// let currentWeather={shidu,pm25,wendu}
// const Temperature=forecast.map((f)=>{
//     let T={
//         high:fillTemperature(f.high),
//         low:fillTemperature(f.low),
//         ymd:fillDate(f.ymd),
//         type:f.type
//     }
//     return T
// })

// const datae={currentWeather,Temperature}
const weatherFilter=(json)=>{
    let {data,cityInfo}=JSON.parse(json);//获取json并转换
    let city=cityInfo.city;
    city=city.substring(0,city.length-1);
    let forecast=data.forecast;
    let {shidu, pm25,wendu,pm10}=data
    let currentWeather={shidu,pm25,pm10,wendu,city}
    //过
    const Temperature=forecast.map((f)=>{
        let T={
            high:fillTemperature(f.high),
            low:fillTemperature(f.low),
            ymd:fillDate(f.ymd),
            type:f.type
        }
        return T
    });

    return {currentWeather,Temperature}
};
module.exports=weatherFilter