// services/registrationService.js

const Shippuden = require("../models/shippuden");
const DesignDerbies = require("../models/design-derbies");
const InkAndInsight = require("../models/ink-and-insight");
const GameOfThreads = require("../models/game-of-threats");
const PixelPerfect = require("../models/pixel-perfect");
const PopTopia = require("../models/pop-topia");
const Query = require("../models/query");

function saveUserQuery(query) {
  return Query.create(query);
}

module.exports = {
  saveUserQuery
};
