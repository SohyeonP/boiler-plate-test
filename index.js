const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require('./config/key');




//application/x-www-form-urlencoded  이렇게 된 데이터를 분석해서 가져오는것
app.use(bodyParser.urlencoded({extended:true})); // client 에서 오는 정보를 서버에서 분석해서 가져오는것
//application/json  json타입으로된 파일을 분석 해서 가져오는것 
app.use(bodyParser.json()); 

const mongoose = require('mongoose')   
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected....'))
 .catch(err => console.log(err))






app.get('/',(req,res) =>res.send('제발 안더웠으면'))





app.post('/register',(req,res)=>{
    //회원가입 할때 필요한 정보들을 client 에서 가져오면
    //그것들을 데이터베이스에 넣어준다.
    

    const user = new User(req.body)
    // 정보들이 user 모델에 저장 된다.
    //저장 후  콜백 함수 저장 할때 에러가 있으면 클라이 언트에게 에러를 전달 해야 한다.
    user.save((err,userInfo) =>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port,()=> console.log(`Example app listening on port ${port}!`))