const mongoose  = require("mongoose")
const tournamentSchema = new mongoose.Schema({
curr_game_name:String,
curr_tournament_name : String ,
organiser_name:String,
unique_id:String,
start_date:String,
end_date : String,
prize : Number,
currency : String,
participated_teams: Array,
won_by:Array,
maximumMembers:Number,
maximumTeams:Number,
registrationDuration:String
})
module.exports = mongoose.model("Tournament" , tournamentSchema)