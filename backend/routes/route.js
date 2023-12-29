const express = require("express");
const { check } = require("express-validator");
const controller = require("../controllers/controller");

const router = express.Router();

router.get("/", controller.getModels);

module.exports = router;
