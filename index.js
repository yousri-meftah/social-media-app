const ex=require('express');
const app=ex();
const mongoose=require('mongoose')
const ur=require('./routes/user.router')
const cors=require('cors')
app.use(ex.json())

app.get('/',(req,res)=>{
    res.send('saha lmef');
})


app.use( cors() )

app.use('/users' , ur)

mongoose.connect('mongodb://localhost:27017/smapp',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

const db=mongoose.connection;

db.on("error",console.error.bind(console,"error") );
db.once("open",function(){
    console.log('saha mef');
})

app.listen(5000,()=>{
    console.log("nice work bro ");
})