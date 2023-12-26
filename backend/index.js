const express = require("express");
const functions = require('firebase-functions');
const products = require("./products");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to our Jaeyong Shopping Mall API...");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

exports.api = functions.https.onRequest(app);
