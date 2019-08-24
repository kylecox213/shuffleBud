friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends/", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let match = {
            name: "",
            photo: "",
            differential: 100
        };
        console.log(req.body);

        let userData = req.body;
        let userScores = userData.scores;
        let totalDiff = 0;

        for (let f = 0; f < friends.length; f++) {
            console.log(friends[f].name);
            totalDiff = 0;

            for (let s = 0; s < friends[f].scores[s]; s++) {
                totalDiff += Math.abs(parseInt(userScores[s]) - parseInt(friends[f].scores[s]));

                if (totalDiff <= match.differential) {
                    match.name = friends[f].name;
                    match.photo = friends[f].photo;
                    match.differential = totalDiff;

                }
            }
        }
        friends.push(userData);
        console.log(res.json(match));
    });
}