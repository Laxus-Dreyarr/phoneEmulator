
const { app, BrowserWindow } = require('electron');
const path = require('path');function createWindow() {
const win = new BrowserWindow({
width: 600,
height: 1000,
webPreferences: {
nodeIntegration: false,
contextIsolation: true,
},
autoHideMenuBar: true,
resizable: true,
minWidth: 360,
minHeight: 700,
transparent: true,
frame: false,
alwaysOnTop: true,
backgroundColor: '#00000000',
});
win.setAlwaysOnTop(true, 'screen-saver');
win.loadFile('phone-emulator.html');
}
app.whenReady().then(() => {
createWindow();
app.on('activate', () => {
if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
});
app.on('window-all-closed', () => {
if (process.platform !== 'darwin') app.quit();
});
