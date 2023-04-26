const user = require('../models/user.models.js');
const jwt = require('jsonwebtoken');
exports.signup = (req,res)=>{
    const data = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        pass : req.body.pass,
        bio : req.body.bio,
        picture : req.body.picture,
        birth : req.body.birth
    }
    const u1=new user(data);
    u1.save().then(
        (CreatedUser)=>{
        res.status(200).json({message : "maalem yel mef"})
    }
    ).catch(
        (err)=>{
        res.status(400).json({message : "rakaz"});
    }
    )
}
exports.signin=async (req,res)=>{
    const email=req.body.email
    const pw=req.body.pass
    const finduser=await user.findOne({email : email})
    if(!finduser) return res.status(400).json({message : "user does not exist" })
    if(finduser.pass!=pw){
        return res.status(400).json({message : "pass 8alat"})
    }
    else{
        //return res.status(200).json(message : finduser.pass)
        //generate token
        const cle="YOUSRI"
        //console.log("see if the error is fixed or not nvm tihs commit")
        const token = jwt.sign({data : { id : finduser._id,role : finduser.role} },
            cle,
            { expiresIn : "24h"}
            )
        return res.status(200).json({
            message : "mrgl ",
            token : token,
            user , finduser
        })
    }
    
}