const express = require("express");
const app = express();

const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", require("./src/routes/index"));

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
