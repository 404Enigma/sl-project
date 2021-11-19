require("dotenv").config();

var admin = require("firebase-admin");
var serviceAccount = JSON.parse(process.env.GOOGLE_CREDS);

module.exports = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
