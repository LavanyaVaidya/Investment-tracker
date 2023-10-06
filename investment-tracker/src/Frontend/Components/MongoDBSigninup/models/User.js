const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const Joi=require('joi');//for validation 
const passwordComplexity=require("joi-password-complexity")

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
    
});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token
};

const User=mongoose.model("user",userSchema);
const validate=(data)=>{
    const schema=Joi.object({
        name:Joi.string().required().label("Name"),
        email:Joi.string().email().required().label("Email"),
        name:Joi.passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
};

module.exports={User,validate}