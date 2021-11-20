const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("home");
    res.render("pages/home");
});

router.use("/auth", require("./auth"));
router.use(require("./dashboard"));

// const { upload_data } = require("../seeds/index");
// upload_data();

module.exports = router;
