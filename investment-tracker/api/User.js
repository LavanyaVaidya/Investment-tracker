const express=require('express')
const router=express.Router();

//mongodb user model
const User=require('./../models/User');

//password handler
const bcrypt=require('bcrypt');

//signup
router.post('./signup',(req,res)=>
{
    let{name, email, password}=req.body;
    name=name.trim();
    email=email.trim();
    password=password.trim();
    if(name=="" || email==""||password=="")
    {
        res.json({
            status:FAILED,
            message:"Empty input fields!"
        });
    }
    else if(!/^[a-zA-Z]*$/.test(name))
    {
        res.json({
            status:FAILED,
            message:"Invalid name entered"
        })
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
    {
        res.json({
            status:FAILED,
            message:"Invalid email entered"
        })
    }
    else if(password.length<8)
    {
        res.json({
            status:FAILED,
            message:"Password is too short"
        })
    }
    else{
        User.find({email}).then(result=>{
                if(result.length)
                {
                    res.json({
                        status: "FAILED",
                        message:" User with provided email already exists!"
                    })
                }
                else{
                    //create new user
                    const saltRounds=10;
                    bcrypt.hash(password,saltRounds).then(hashedPassword=>{
                        const newUser=new User({
                            name,
                            email,
                            password:hashedPassword
                        });

                        newUser.save().then(result=>{
                            res.json({
                                status:"SUCCESS",
                                message:"Signup successful",
                                data:result
                            })
                        }).catch(err=>{
                            res.json({
                                status:"FAILED",
                                message:"An error occured while saving user Account!"
                            })
                        })

                    }).catch(err=>{
                        res.json({
                            status:"FAILED",
                            message:"An error occured while hashing password!"
                        })
                    })
                }

        }).catch(err=>{
            console.log(err);
            res.json({
                status:FAILED,
                message:"An error occured while checking for existing user!"
            })
        })
    }
})

//signin
router.post('./signin',(req,res)=>
{

})
module.exports=router;