//Dependencies

//=======================================================

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('sup brosef');
})
// Prepares the Express app for handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));
// ======================================================
// Routing

// Navigates the server to routing files that provide mapping for responding to data requests and responses
// ======================================================

require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

// ======================================================
// Listener

// Initiates the server 
// ======================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



// var arr1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// var arr2 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// let totalDiff = 0;

// for (let i = 0; i < arr1.length; i++) {
//    let arrDiff = (arr1[i]-arr2[i])
//    totalDiff = totalDiff + arrDiff
// };
// console.log(totalDiff)