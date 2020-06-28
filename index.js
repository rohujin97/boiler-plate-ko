const express = require('express')//express module 가져오기
const app = express()//새로운 express app만들기
const port = 5000//5000번 포트 백서버

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yujin:1234@boilerplate-wzni2.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))