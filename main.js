'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        frame: false,
        resizable: false,
        width: 368,
        height: 700,
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});

var ipc = require('ipc');

ipc.on('close-main-window', function () {
    app.quit();
});