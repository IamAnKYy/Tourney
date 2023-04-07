const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const Tournament = require("./models/tournamentModel")
const app = express();
const bcrypt = require("bcrypt");
const tournamentModel = require("./models/tournamentModel");
const PORT = 5000;
const cors = require('cors');
const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://ankitshivhare0328:ankitdatabase@cluster0.qifixmn.mongodb.net/?retryWrites=true&w=majority')
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
app.post("/createUser", async (req, res) => {
    // const password = bcrypt.hash(req.body.password)
    let user
    try {
        user = await User.create({ ...req.body.user })
    }
    catch (error) {
        return res.status(500)
    }
    return res.json(user)
},
)
app.post("/getUser", async (req, res) => {
    let user
    try {
        user = await User.findOne({ email: req.body.user.email })
    } catch (error) {
        return res.status(404)
    }
    const password = user.password
    // if(bcrypt.compare(req.body.password , password)){
    if (req.body.user.password == password) {
        return res.json(user)
    }
    else {
        return res.send("wrong password")
    }
})
app.post("/createTournament", (req, res) => {
    let tournament
    try {
        tournament = tournamentModel.create({ ...req.body })
    } catch (error) {
        res.status(400)
    }
    return res.json(tournament)
})
app.post("/getTournamentByKeyword", (req, res) => {
    let tournament
    try {
        tournament = Tournament.find({ curr_game_name: req.body.keyword })
    } catch (error) {
        return 
    }
    return res.json(tournament)
})
app.post("/getTournamentById", (req, res) => {
    let tournament
    try {
        tournament = Tournament.find({ id: req.body.id })
    } catch (error) {
        return 
    }
    return res.json(tournament)
})
