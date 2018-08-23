const { app } = require('electron');
var fs = require('fs');
var path = require('path');
var Preferences = require('../js/preferences');

const prefs = new Preferences();

var appRouter = function (application) {

    application.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    application.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    application.get("/sessions", function (req, res) {
        let sessions = fs.readFileSync(path.join(app.getPath('userData'), 'data', 'sessions.json'));
        res.status(200).json(JSON.parse(sessions));
    });

    application.get("/session/:id", function (req, res) {
        let session = fs.readFileSync(path.join(app.getPath('userData'), 'data', req.params.id + '.json'));
        res.status(200).json(JSON.parse(session));
    });

    application.get("/preferences", function (req, res) {
        res.status(200).json(prefs.getPrefs());
    })

    application.post("/preferences", function(req, res) {
        prefs.savePrefs(req.body);
        res.status(201).json({result: "data saved"});
    })
};

module.exports = appRouter;