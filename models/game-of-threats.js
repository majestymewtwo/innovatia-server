const mongoose = require("mongoose");

const gameOfThreatsSchema = new mongoose.Schema({
  teamName: String,
  memberOneName: String,
  memberOneCollegeId: String,
  memberOneMailId: String,
  memberOnePhoneNo: String,
  memberOneDept: String,
  memberOneYear: String,
  memberOneCollegeName: String,
  memberTwoName: String,
  memberTwoCollegeId: String,
  memberTwoMailId: String,
  memberTwoPhoneNo: String,
  memberTwoDept: String,
  memberTwoYear: String,
  memberTwoCollegeName: String,
});

const GameOfThreats = mongoose.model("GameOfThreats", gameOfThreatsSchema);

module.exports = GameOfThreats;
