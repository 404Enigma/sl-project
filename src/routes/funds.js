const express = require("express");
const router = express.Router();

const fundscontroller = require("../controllers/funds.controller");

router.post("/", fundscontroller.donatefunds);

module.exports = router;
