const mongoose = require("mongoose");

const popTopiaSchema = new mongoose.Schema({
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
  memberThreeName: String,
  memberThreeCollegeId: String,
  memberThreeMailId: String,
  memberThreePhoneNo: String,
  memberThreeDept: String,
  memberThreeYear: String,
  memberThreeCollegeName: String,
});

const PopTopia = mongoose.model("PopTopia", popTopiaSchema);

module.exports = PopTopia;
