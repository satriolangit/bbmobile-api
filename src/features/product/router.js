const express = require("express");
const { getProductsWithStock } = require("./controller");

const router = express.Router();

router.get("/", getProductsWithStock);

module.exports = router;
