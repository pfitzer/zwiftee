const {app, BrowserWindow, ipcMain} = require('electron');
const {Router} = require('electron-routes')
const path = require('path');
const url = require('url');
const fs = require('fs')
const Preferences = require('./dist/lib/preferences');

let win;
let splashWindow;

const createSplashWindow = () => {
    splashWindow = new BrowserWindow({
        width: 320,
        height: 240,
        frame: false,
        resizable: false,
        backgroundColor: '#ff610e',
        alwaysOnTop: true,
        show: false,
        title: 'loading'
    })

    splashWindow.loadURL(url.format({
        pathname: path.join(__dirname,'dist', 'tmpl', 'splash.html'),
        protocol: 'file',
        slashes: true
    }))

    splashWindow.on('closed', () => {
        splashWindow = null
    })

    splashWindow.once('ready-to-show', () => {
        splashWindow.show()
        createWindow('index.html', {
            width: 1200,
            height: 900,
            show: false,
            backgroundColor: '#ff610e'
        })
    })
}

const createWindow = (fileStr, options) => {
    // Create the browser window.
    mainWindow = new BrowserWindow(options);

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'dist', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    setTimeout(() => {
        // start api server
        // startApi(app)
    }, 500)
    createSplashWindow()
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow('index.html', {
            width: 1200,
            height: 900,
            show: false,
            backgroundColor: '#ff610e'
        });
    }
});

// ipc
ipcMain.on('app-init', event => {
    if(splashWindow) {
        splashWindow.close()
    }
    mainWindow.show()
})

// api
const prefs = new Preferences(app);
const api = new Router('zwiftee');

api.get('sessions', (req, res) => {
    let sessions = fs.readFileSync(path.join(app.getPath('userData'), 'data', 'sessions.json'), 'utf-8');
    res.json(JSON.parse(sessions));
});

api.get('session/:id', (req, res) => {
    let session = fs.readFileSync(path.join(app.getPath('userData'), 'data', req.params.id + '.json'), 'utf-8');
    res.json(JSON.parse(session));
});

api.get("/preferences", function (req, res) {
    res.json(prefs.getPrefs());
})

// todo: fix request body. electron request only knows uploadData
api.post("/preferences", function (req, res) {
    console.log(req);
    prefs.savePrefs(req.uploadData[0]);
    res.json({result: "data saved"});
})