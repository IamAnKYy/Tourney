const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    participated_tournaments: [mongoose.Schema.Types.ObjectId],
    tournamentHosted: [mongoose.Schema.Types.ObjectId],
})
module.exports = mongoose.model("User", userSchema)