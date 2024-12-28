const bcrypt = require("bcrypt")
const UserData = require("../models/userData")

async function handleCreateData(req, res){
    try {
        const { website, username, password } = req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const create = await UserData.create({
            website,
            username,
            password: hashedPassword,
        })
        return res.json({success: true, message: "Data Created", data: create});
    } catch (err) {
        return res.json({success: false, message: "Error Creating Data", error: err.message})
    }
}

async function handleDeleteData(req, res) {
    return res.json({success: true, messgage: "Deleted"})
}

module.exports = {
    handleCreateData,
    handleDeleteData,
}