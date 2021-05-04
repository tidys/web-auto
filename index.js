let Electron = require("electron");
const { app } = Electron;
const BrowserWindow = Electron.BrowserWindow;
const Path = require("path");
app.on("ready", function () {
    let win = new BrowserWindow({
        width: 950,
        height: 700,
        webPreferences: {
            webSecurity: false,
            webviewTag: true,
            allowRunningInsecureContent: true,
            nodeIntegration: true,// 允许在渲染进程使用node特性
        },
        backgroundColor: "#ffffff",
        allowRunningInsecureContent: true
    });
    win.loadFile(Path.join(__dirname, 'window/index.html'));
    win.show();
    win.openDevTools();
});
app.on("window-all-closed", function () {
    app.quit();
});
