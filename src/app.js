const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "welcome to bukubon mobile api" });
});

app.use("/product", require("./features/product/router"));

module.exports = app;
