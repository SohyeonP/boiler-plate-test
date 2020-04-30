const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    }, 
    email:{
        type:String,
        trim:true,   //만약 hidhen 9715@naver.com 이렇게 입력 했을때 중간의 공백을 없에는 역할을 한다. 
        unique:1    //같은 이메일은 사용 하지 못하도록
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength :50
    },
    role:{  //role 주는 이유 관리자가 될수 있고 일반 유저가 될수 있도록 number가 1 이면 관리자 0 일반 사용자
        type:Number,
        default: 0
    },
    image:String, //그사람에 해당하는 이미지
    token:{ //token 을 이용하면 유효성 검사를 할수 있다.
        type: String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User',userSchema)
//방금 만든 모델의 이름을 넣어주면 된다.
module.exports = {User}

//만든 모델을 다른 파일 에서 사용 하고 싶으니까 내보낸다.