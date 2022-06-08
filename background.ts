import { app, BrowserWindow } from 'electron'
import path from 'path'
import reload from 'electron-reload'
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 800, height: 600
    })
    console.log(process.env)
    // mainWindow.loadFile("dist/index.html")
    mainWindow.loadURL("http://localhost:3000/")
}

app.whenReady().then(() => {
    createMainWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
})

const isDevelopment = !app.isPackaged

if (isDevelopment) {
    reload(path.join(__dirname), {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    })
}