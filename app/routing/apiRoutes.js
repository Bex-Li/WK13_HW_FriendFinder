var fs = require("fs"); 

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.send("hello");
    });
    app.post("/api/friends", function(req, res) {
        fs.appendFile("friends.js", JSON.stringify(data) + "\n", function(err){
            if(err) {
                return console.log(err);
            }
            console.log("friends.js was updated!");
        });
    });
}

