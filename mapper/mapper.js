const models = require("../models");

function mapAndSave(team, modelName) {
  const Model = models[modelName];
  if (!Model) {
    throw new Error(`Model '${modelName}' not found`);
  }

  const registration = new Model();
  registration.teamName = team.teamName;

  if (team.captainName) {
    registration.memberOneName = team.captainName;
    registration.memberOneCollegeId = team.captainCollegeId;
    registration.memberOneMailId = team.captainEmail;
    registration.memberOnePhoneNo = team.captainPhone;
    registration.memberOneDept = team.captainDept;
    registration.memberOneYear = team.captainYear;
    registration.memberOneCollegeName = team.captainCollege;
  }

  const teamMembers = team.teamMembers;
  if (teamMembers && teamMembers.length > 0) {
    const memberOne = teamMembers[0];
    registration.memberTwoName = memberOne.name;
    registration.memberTwoCollegeId = memberOne.collegeId;
    registration.memberTwoMailId = memberOne.email;
    registration.memberTwoPhoneNo = memberOne.phone;
    registration.memberTwoDept = memberOne.dept;
    registration.memberTwoYear = memberOne.year;
    registration.memberTwoCollegeName = memberOne.college;

    if (teamMembers.length > 1) {
      const memberTwo = teamMembers[1];
      registration.memberThreeName = memberTwo.name;
      registration.memberThreeCollegeId = memberTwo.collegeId;
      registration.memberThreeMailId = memberTwo.email;
      registration.memberThreePhoneNo = memberTwo.phone;
      registration.memberThreeDept = memberTwo.dept;
      registration.memberThreeYear = memberTwo.year;
      registration.memberThreeCollegeName = memberTwo.college;
    }
  }

  return registration.save();
}

module.exports = mapAndSave;
