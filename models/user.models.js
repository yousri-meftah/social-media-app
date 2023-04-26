const mong=require('mongoose')

const userschema=new mong.Schema({
    firstname:String,
    lastname:String,
    email : String,
    pass : String ,
    role:{
        type:String ,
        enum :['admin','user'],
        default:'user'
    },
    bio : String ,
    picture :String ,
    birth : Date
})

module.exports=mong.model('users',userschema);

