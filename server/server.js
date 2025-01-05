const express = require("express")
const app =  express()
const cors = require("cors")
const bodyParser = require("body-parser");
const { connectDB } = require("./connect");
const user = require("./routes/user");
const { config } = require("dotenv");
const PORT = 8080;
require("dotenv").config()

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use("/user", user)

// DB Connection 
connectDB("mongodb://localhost:27017/password-manager").then(()=>{
    console.log("Database Connected...")
}).catch((err)=>{
    console.log("Error Occurred Connecting DataBase..." + err.message);
})

app.get("/", async (req, res)=>{
    return res.json({success: true, message: "Working"})
})

app.listen(PORT, ()=>{
    console.log("Server Started at PORT: ", PORT);
})
