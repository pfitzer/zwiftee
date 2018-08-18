var EasyFit = require('easy-fit').default;
var path = require('path');
var fs = require('fs');
var homedir = require('os').homedir();
var Store = require('./store');

var Fit = class {
    constructor() {
        this.zwiftDir = path.join(homedir, 'Documents\\Zwift\\Activities');
        this.store = new Store();
    }

    getFiles() {
        return fs.readdirSync(this.zwiftDir);
    };

    readFile(filePath) {
        console.log(filePath);
        fs.readFile(filePath, function (err, content) {
            if (content === undefined) return;
            var easyFit = new EasyFit({
                force: true,
                speedUnit: 'km/h',
                lengthUnit: 'km',
                temperatureUnit: 'kelvin',
                elapsedRecordField: true,
                mode: 'cascade',
            });
            try {
                easyFit.parse(content, function (error, data) {
                    // Handle result of parse method
                    if (error) {
                        return;
                    } else {
                        var toStore = {
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
                            'type': data.activity.type
                        };
                        try {
                            this.store.insert(data);
                        } catch (e) {
                            console.log(err);
                        }
                    }
                });
            } catch (e) {
                return;
            }
        });
    }

    update() {
        var files = this.getFiles();
        files.forEach(file => {
            this.readFile(path.join(this.zwiftDir, file));
        })
    }
};

module.exports = Fit;