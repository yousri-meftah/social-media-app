const mong=require('mongoose')

const postschema=new mong.Schema({
    Name : String,
    desc : String ,
    media : [],
    creator : {
        type : mongoose.type.objectId,
        ref : 'users',
        required : true
    }
})
module.exports=mong.model('posts',postschema)