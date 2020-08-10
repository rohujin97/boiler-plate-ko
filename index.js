const express = require('express')//express module 가져오기
const app = express()//새로운 express app만들기
const port = 5000//5000번 포트 백서버
const bodyParser = require('body-parser');
const { User } = require("./models/User");


const config = require("./config/key");
//application/x-www-form-urlencoded 된 data를 서버에서 분석해서 가져올수 있ㄷ록
app.use(bodyParser.urlencoded({extended: true}));

//application/json 타입으로 된것을 분석해서 가져올수 있도록
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => res.send('Hello World!'))


app.post('/register', (req, res) => {//회원가입을 위한 router
    
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 data base에 넣어준다.


    const user = new User(req.body)

    //mongodb에서 오는 메소드 = save
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({//200은 성공 json형식으로 정보 전달
            success: true
        })
    })//정보들이 user model에 저장된것
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))