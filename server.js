//Dependencies

//=======================================================

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 8080;


// Prepares the Express app for handling data parsing
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({ type: 'text/html'}))
// ======================================================
// Routing

// Navigates the server to routing files that provide mapping for responding to data requests and responses
// ======================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// ======================================================
// Listener

// Initiates the server 
// ======================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



// let arr1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// let arr2 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// let totalDiff = 0;

// for (let i = 0; i < arr1.length; i++) {
//    let arrDiff = (arr1[i]-arr2[i])
//    totalDiff = totalDiff + arrDiff
// };
// console.log(totalDiff)