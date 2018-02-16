'use strict';

const { app, BrowserWindow } = require('electron');

var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        frame: false,
        resizable: false,
        width: 368,
        height: 700
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});