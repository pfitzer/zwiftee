'use strict';

var path = require('path');
var fs = require('fs');
const {app} = require('electron');

let Preferences

Preferences = class {
    constructor() {
        this.prefs = {
            'units': 'metric',
            'locale': app.getLocale(),
        };

        this.units = {
            metric: {
                speed: 'km/h',
                lengthUnit: 'km',
                temperatureUnit: 'kelvin'
            },
            imperial: {
                speed: 'mi/h',
                lengthUnit: 'mi',
                temperatureUnit: 'kelvin'
            }
        };
        this.prefFile = path.resolve(app.getPath('userData'), 'preferences.json');
        this._checkFiles();
    }

    _checkFiles() {
        if (!fs.existsSync(this.prefFile)) {
            fs.appendFileSync(this.prefFile, JSON.stringify(this.prefs), function (err) {
                if (err) throw err;
                console.log(err);
            })
        }
    }

    getPrefs() {
        const prefs = fs.readFileSync(this.prefFile);
        return JSON.parse(prefs);
    }

    savePrefs(prefs) {
        let buffer = new Buffer(JSON.stringify(prefs));
        fs.open(this.prefFile, 'w', function (err, fd) {
            if (err) throw 'could not open preferences file: ' + err;
            fs.write(fd, buffer, 0, buffer.length, null, function (err) {
                if (err) throw 'error writing file: ' + err;
                fs.close(fd, function () {
                    console.log('wrote file');
                })
            })
        })
    }
};

module.exports = Preferences;