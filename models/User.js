const mongoose = require('mongoose');

const UserSchema = mangoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: ture,//space를 없애주는 역할
    },
    password: {
        type: String,
        minlength: 50
    },
    role: {
        type: Number,//1이면 관리자 0이면 유저
        default: 0
    },
    image: String,
    token: {//유효성 관리
        type: String
    },
    tokenExp: {//유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)//schema를 model로 감싸주기

module.exports = { User }