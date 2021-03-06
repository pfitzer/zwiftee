'use strict';

var EasyFit = require('easy-fit').default;
var path = require('path');
var fs = require('fs');
var homedir = require('os').homedir();
var Preferences = require('./preferences')


let Fit
Fit = class {
    constructor(app) {
        this.zwiftDir = path.join(homedir, 'Documents', 'Zwift', 'Activities');
        this.saveDir = path.join(app.getPath('userData'), 'data');
        this.sessionsFile = path.join(this.saveDir, 'sessions.json');
        this.preferences = new Preferences(app);
        this.checkFiles();
    }

    checkFiles() {
        if (fs.existsSync(this.sessionsFile)) {
            let content = fs.readFileSync(this.sessionsFile);
            this.sessions = JSON.parse(content);
        } else {
            if (!fs.existsSync(this.saveDir)) {
                fs.mkdirSync(this.saveDir);
                fs.appendFileSync(this.sessionsFile, JSON.stringify(this.sessions), function (err) {
                    if (err) throw err;
                    console.log(err);
                })
            }
            this.sessions = {};
        }
    }

    getFiles() {
        return fs.readdirSync(this.zwiftDir);
    };

    readFile(file) {
        let content = fs.readFileSync(path.join(this.zwiftDir, file));
        let basename = path.basename(file, '.fit');
        let pref = this.preferences.getPrefs();
        var easyFit = new EasyFit({
            force: true,
            speedUnit: this.preferences.units[pref.units].speedUnit,
            lengthUnit: this.preferences.units[pref.units].lengthUnit,
            temperatureUnit: this.preferences.units[pref.units].temperatureUnit,
            elapsedRecordField: true,
            mode: 'cascade',
        });
        try {
            let toStore;
            let sessionData = false;
            easyFit.parse(content, function (error, data) {
                // Handle result of parse method
                if ('sessions' in data.activity) {
                    toStore = {
                        'id': basename,
                        'created': new Date(data.file_id.time_created),
                        'time_elapsed': data.activity.sessions[0].total_elapsed_time,
                        'distance': data.activity.sessions[0].total_distance,
                        'avg_speed': data.activity.sessions[0].avg_speed,
                        'max_speed': data.activity.sessions[0].max_speed,
                        'avg_power': data.activity.sessions[0].avg_power,
                        'max_power': data.activity.sessions[0].max_power,
                        'total_ascent': data.activity.sessions[0].total_ascent,
                        'avg_heart_rate': data.activity.sessions[0].avg_heart_rate,
                        'max_heart_rate': data.activity.sessions[0].max_heart_rate,
                        'avg_cadence': data.activity.sessions[0].avg_cadence,
                        'max_cadence': data.activity.sessions[0].max_cadence,
                        'total_calories': data.activity.sessions[0].total_calories,
                        'type': data.activity.type
                    };

                    sessionData = data.activity.sessions;
                }
            });
            if (basename in this.sessions === false) {
                this.sessions[basename] = toStore;
                if (sessionData) {
                    this._writeSession(basename, sessionData);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    update() {
        var files = this.getFiles();
        files.forEach(file => {
            this.readFile(file);
        });
        this._writeSessionsFile();
    }

    _writeSessionsFile() {
        let buffer = new Buffer(JSON.stringify(this.sessions));
        fs.open(this.sessionsFile, 'w', function (err, fd) {
            if (err) throw 'could not open sessions file: ' + err;
            fs.write(fd, buffer, 0, buffer.length, null, function (err) {
                if (err) throw 'error writing file: ' + err;
                fs.close(fd, function () {
                    console.log('wrote file');
                })
            })
        })
    }

    _writeSession(id, session) {
        fs.appendFileSync(path.join(this.saveDir, id + '.json'), JSON.stringify(session), function (err) {
                    if (err) throw err;
                    console.log(err);
                })
    }
};

module.exports = Fit;