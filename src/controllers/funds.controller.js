const db = require("./config/db");

module.exports.donatefunds = (req, res) => {
    const data = req.body;
    const res = await db.collection("Funds").doc().set(data);
    res.json({ message: "Success", id: res.id });
};

module.exports.getallfunds = (req, res) => {
    const snapshot = await citiesRef.get();
    res.json(snapshot);
};
