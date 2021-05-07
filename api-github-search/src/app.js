require('dotenv').config();
const express = require('express');
const app = express();
const consign = require("consign");

consign({
        cwd: "src",
        verbose: process.env.APP_DEBUG === true || false,
        locale: 'pt-br' })
    .include('/config/middleware.js')
    .then('/routes')
    .then('/config/routes.js')
    .into(app);

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send({
        "message": "Server running"
    });
});

module.exports = app
