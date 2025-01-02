const mongoose = require("mongoose")

const userDataSchema = new mongoose.Schema({
    website: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        reuqired: true,
    }
}, {
    timestamps: true
})

const UserData = new mongoose.model("user-data", userDataSchema)

module.exports = UserData