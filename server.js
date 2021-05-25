const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const dbconnection = require("./db");
const productsRoute = require("./routes/productsRoute");

app.use("/api/products/", productsRoute);

app.get("/", (req, res) => {
  res.send("This is express");
});

const port = 5000;
app.listen(port, () => console.log(`Node Js server started ${port}`));
