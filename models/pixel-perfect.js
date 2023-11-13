const mongoose = require("mongoose");

const pixelPerfectSchema = new mongoose.Schema({
  teamName: String,
  memberOneName: String,
  memberOneCollegeId: String,
  memberOneMailId: String,
  memberOnePhoneNo: String,
  memberOneDept: String,
  memberOneYear: String,
  memberOneCollegeName: String,
});

const PixelPerfect = mongoose.model("PixelPerfect", pixelPerfectSchema);

module.exports = PixelPerfect;
