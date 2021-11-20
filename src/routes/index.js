const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.use("/funds", require("./funds"));

module.exports = router;
