const admin = require("../config/db");

const db = admin.firestore();

module.exports.donatefunds = async (req, res) => {
    const data = req.body;

    console.log(data);
    const result = await db.collection("Funds").doc().set(data);
    res.json({ message: "Success", id: result.id });
};

module.exports.getallfunds = async (req, res) => {
    const snapshot = await citiesRef.get();
    res.json(snapshot);
};
