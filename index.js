const express = require('express')
const app = express()
const port = 3000

const moongoose = require('mongoose')
moongoose.connect('mongodb+srv://hidhen:@Hwols9703@boilerplate-ogosu.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('MongoDB Connected....'))
 .catch(err => console.log(err))




app.get('/',(req,res) =>res.send('Hello World! 안녕하세요!'))

app.listen(port,()=> console.log(`Example app listening on port ${port}!`))