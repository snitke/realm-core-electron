var electron = require("electron"); 
var app = electron.app; 
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on("ready", () => {

  mainWindow = new BrowserWindow({width: 1280, height: 720, show: false});
  mainWindow.loadURL("file://" + __dirname + "/index.html");

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});