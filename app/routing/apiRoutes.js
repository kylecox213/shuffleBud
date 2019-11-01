// DEPENDENCIES -----------------------------------------------
const friends = require("../data/friends.js");

// ROUTING ----------------------------------------------------
module.exports = function (app) {

    // GET route for retrieving friend data from the server
    app.get("/api/friends/", function (req, res) {
        res.json(friends);
    });

    // POST route to add friend data to the server
    app.post("/api/friends", function (req, res) {
        // object with name and photo fields empty
        // declare a variable to house the name of the dimension in which the user/friend are most alike
        let match = {
            name: "",
            photo: "",
            differential: 100
        };
        console.log(req.body);
            // declare variables set to the users data and scores
            // declare a difference score variable and set it to 0
        let userData = req.body;
        let userScores = userData.scores;
        let totalDiff = 0;

        // loop over the data currently inside of the friends array
        for (let f = 0; f < friends.length; f++) {
            console.log(friends[f].name);
            totalDiff = 0;

                // loop over the friends array with the scores object
            for (let s = 0; s < friends[f].scores[s]; s++) {
                 // compare the score at each index of the user's score object to that of the currently-selected friend
                // subtract the friend's score from the user's score, extract the absolute value
                totalDiff += Math.abs(parseInt(userScores[s]) - parseInt(friends[f].scores[s]));
                // compare the total differential to the match differential
                if (totalDiff <= match.differential) {
                    //if the score is lower, set the score to the current match differential
                    match.name = friends[f].name;
                    match.photo = friends[f].photo;
                    match.differential = totalDiff;

                }
            }
        }
        // upon completeion of all comparisons and match is determined
        // push the new user into the friends array
        friends.push(userData);
        // return to the client the least different friend as a json object
        console.log(res.json(match));
    });
}