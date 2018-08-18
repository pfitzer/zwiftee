var Datastore = require('nedb');

var Store = class {
    constructor() {
        this.db = new Datastore({ filename: 'data.db', autoload: true });
    }

    insert(data) {
        this.db.insert(data, function(err, newDock) {
            if(err) throw err;
            console.log('data insert');
        });
    }

    find(data) {
        this.db.find(data, function(err, docs) {
            if(err) throw err;
        })
    }
};

module.exports = Store;