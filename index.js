// index.js or app.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const registerRoutes = require("./routes/registration-routes");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://server-user:4FzXB5lmkfPpL60P@mobilerepairshop.una1bdt.mongodb.net/innovatia-2023",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log('Error connecting to DB');
    console.error(err);
});

app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("This works");
})
app.use("/register", registerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
