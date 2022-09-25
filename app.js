const express =require('express');
const cors =require('cors');

const app=express();
const request =require('request')
const weatherFilter=require('./filter.js');
app.use(cors());//是一个 函数
const router=express.Router();

router.get('/',(req,res)=>{
    let id;
    req.query.id==undefined?id=101010100:id=req.query.id
    request(`http://t.weather.sojson.com/api/weather/city/${id}`,
    (err, response, body)=>{
        if(err){
         return  res.send(err);
        }
        const NewData=weatherFilter(response.body);//对接口数据加工
        console.log(NewData);
        res.send(NewData);
    })
})

router.get('/test',(req,res)=>{

    
    console.log(id);
  res.send('test')
})

app.use(router)

app.listen('8082',()=>{
    console.log('8082 nice ');
})

