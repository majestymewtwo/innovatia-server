const express = require("express");
const router = express.Router();
const cors = require("cors");
const { saveUserQuery } = require("../services/registration-service");
const mapAndSave = require("../mapper/mapper");

router.use(cors());

router.get("/", (req, res) => {
  res.send("This works");
});

router.post("/query", (req, res) => {
  const query = req.body;
  saveUserQuery(query)
    .then((savedQuery) => res.json(savedQuery))
    .catch((error) => res.status(500).json({ error: "Internal Server Error" }));
});

const registerEndpoints = [
  "/superhero-shippuden",
  "/design-derbies",
  "/ink-and-insight",
  "/game-of-threats",
  "/pixel-perfect",
  "/pop-topia",
];

registerEndpoints.forEach((endpoint) => {
  router.post(endpoint, (req, res) => {
    const team = req.body;
    let modelName = endpoint
      .slice(1)
      .replace(/-(.)/g, (match, group1) => group1.toUpperCase());
    modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    mapAndSave(team, modelName)
      .then((savedData) => res.json(savedData))
      .catch((error) =>
        res.status(500).json({ error: "Internal Server Error" })
      );
  });
});

module.exports = router;
