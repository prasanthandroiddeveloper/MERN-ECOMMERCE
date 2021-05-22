const mongoose = require("mongoose");

const mongoDBURL =
  "mongodb+srv://prasanth:prasanth@cluster0.fbot3.mongodb.net/mernecommerce";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("Mongo db connection failed");
});

dbconnect.on("connected", () => {
  console.log("Mongo db connection success");
});

module.exports = mongoose;
