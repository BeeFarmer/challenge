'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const registerRoutes = require('./routes');

app.use(cors());
app.use(express.static('public'));

// server config
const port = process.env.PORT || 8000;

// register routes
registerRoutes(app);

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


