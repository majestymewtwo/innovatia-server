const mongoose = require("mongoose");

const designDerbiesSchema = new mongoose.Schema({
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

const DesignDerbies = mongoose.model("DesignDerbies", designDerbiesSchema);

module.exports = DesignDerbies;
