const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/sample");

router.get("/", (req, res) => controllers.getSamples(req, res));

router.post("/", (req, res) => controllers.postSample(req, res));

router.put("/:id", (req, res) => controllers.putSample(req, res));

router.delete("/:id", (req, res) => controllers.deleteSample(req, res));

module.exports = router;
