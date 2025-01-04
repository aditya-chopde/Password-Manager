const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

async function handleUserSignup(req, res){
    try {
        const {name, email, password} = req.body;
        const isExists = await User.find({email})

        if(!isExists){

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds)
            const createUser = await User.create({
                name,
                email,
                password: hashedPassword
            })
            
            const token = jwt.sign({
                name, email
            }, process.env.SECRET_JWT)
            
            return res.json({success: true, message: "User Created", createUser, token})
        }else{
            return res.json({success: false, message: "User Already Exists"})
        }
    } catch (err) {
        return res.json({success: false, message: "Error Creating User", error: err.message})
    }
}

async function handleLoginUser(req, res){
    try {
        const {email, password} = req.body;
        const getUser = await User.findOne({email})
        const storedPass = getUser.password;
        const isMatch = await bcrypt.compare(password, storedPass)
        if(!isMatch){
            return res.json({success: false, message: "Something Went Wrong"})
        }else{
            const token  = jwt.sign({email, password}, process.env.SECRET_JWT);
            return res.json({success: true, message: "User Found", getUser, token});
        }
    } catch (err) {
        return res.json({success: false, message: "Error Logging User", error: err.message})   
    }
}

module.exports = {
    handleUserSignup,
    handleLoginUser,
}