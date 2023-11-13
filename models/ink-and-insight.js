const mongoose = require("mongoose");

const inkAndInsightSchema = new mongoose.Schema({
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

const InkAndInsight = mongoose.model("InkAndInsight", inkAndInsightSchema);

module.exports = InkAndInsight;
