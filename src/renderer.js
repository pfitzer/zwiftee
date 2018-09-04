const {ipcRenderer} = require('electron');
const {app} = require('electron').remote;

const Fit = require('./lib/fit');

const createData = (app) => {
    let fit = new Fit(app);
    fit.update();
    ipcRenderer.send('app-init');

}

createData(app)