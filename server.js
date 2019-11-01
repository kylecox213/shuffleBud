//=======================================================
//Dependencies
//=======================================================

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//=======================================================
//Express config
//=======================================================


const app = express();

const PORT = process.env.PORT || 5000;


// Prepares the Express app for handling data parsing
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))



require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// ======================================================
// Listener

// Initiates the server 
// ======================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

