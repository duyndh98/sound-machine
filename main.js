'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

var globalShortcut = require('global-shortcut');

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        frame: false,
        resizable: false,
        width: 368,
        height: 700,
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

    globalShortcut.register('ctrl+shift+1', function () {
        console.log("1")
        mainWindow.webContents.send('global-shortcut', 0);
    });

    globalShortcut.register('ctrl+shift+2', function () {
        console.log("2")
        mainWindow.webContents.send('global-shortcut', 1);
    });
});

var ipc = require('ipc');

ipc.on('close-main-window', function () {
    app.quit();
});
