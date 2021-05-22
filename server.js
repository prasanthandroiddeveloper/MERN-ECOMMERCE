const express = require("express");
const app = express();

const dbconnection = require("./db");

app.get("/", (req, res) => {
  res.send("This is express");
});

const port = 5000;
app.listen(port, () => console.log(`Node Js server started ${port}`));
