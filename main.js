const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function startApi() {
    var express = require("express");
    var bodyParser = require("body-parser");
    var routes = require("./routes/routes.js");
    var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    routes(app);

    var server = app.listen(3000, function () {
        console.log("api running on port.", server.address().port);
    });
};

let win;

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff',
        icon: url.format({
            pathname: path.join(__dirname, 'dist/assets/logo.png'),
            protocol: 'file',
            slashes: true
        })
    });
    win.setTitle(require('./package.json').name);
    // win.setMenu(null);


    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //// uncomment below to open the DevTools.
    win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function () {
        win = null
    })
}

// Create window on electron intialization
app.on('ready', function() {
    startApi();
    createWindow();
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})