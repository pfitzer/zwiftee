const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const Store = require('./js/store.js');
const Fit = require('./js/fit');

const store = new Store();
const fit = new Fit();
fit.update();

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
    win.setMenu(null);


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
app.on('ready', createWindow)

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