const functions = require("firebase-functions");

const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));

// routes
app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

// Create - post


// Read - get


// Update - put


// Delete - delete


// export the api to firebase cloud functions
exports.app = functions.https.onRequest(app);
