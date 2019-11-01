const path = require("path");

module.exports = function (app) {

    //If the URL is for the survey page, display the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // If the URL is for the friends list, display the friends list
    app.get(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/friends.html"));
    });

    
    // In all other instances, display the home page 
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}