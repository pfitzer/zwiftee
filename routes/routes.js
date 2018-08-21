const {app} = require('electron');
var fs = require('fs');
var path = require('path');


var appRouter = function (application) {
    application.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    application.get("/sessions", function (req, res) {
        res.status(200).header({"Content-Type": "application/json"}).send(fs.readFileSync(path.join(app.getPath('userData'), 'sessions.json')));
    });
}

module.exports = appRouter;