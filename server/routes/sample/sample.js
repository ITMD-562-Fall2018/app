const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/sample");

router.get("/", (req, res) => controllers.getSample(req, res));

module.exports = router;
