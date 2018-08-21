const {app} = require('electron');
var fs = require('fs');
var path = require('path');


var appRouter = function (application) {
    application.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    application.get("/sessions", function (req, res) {
        let sessions = fs.readFileSync(path.join(app.getPath('userData'), 'sessions.json'));
        res.status(200).json(JSON.parse(sessions));
    });
}

module.exports = appRouter;