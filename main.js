
const { app, BrowserWindow } = require('electron');
const path = require('path');function createWindow() {
const win = new BrowserWindow({
width: 420,
height: 900,
webPreferences: {
nodeIntegration: false,
contextIsolation: true,
},
autoHideMenuBar: true,
resizable: false,
});
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
