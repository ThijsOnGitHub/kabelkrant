import { app, BrowserWindow, dialog, ipcMain, Menu, nativeImage, Tray } from 'electron';
import path from 'path';
import { EventKeys, Events } from './events';
import fs from "fs"
import { startPlayoutServer } from './server';
import { getFilesInFolder } from './server/getFilesInFolder';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let tray
function handleEvent<EventName extends keyof Events>(event: EventName, callback: Events[EventName]) {
  ipcMain.handle(event, (_, ...args: Parameters<Events[EventName]>) => {
    //@ts-ignore
    return callback(...args);
  });
}

const createWindow = () => {
  // allow only one window to be open
  if (BrowserWindow.getAllWindows().length > 0) {
    BrowserWindow.getAllWindows()[0].show()
    return
  }
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }


  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

const programJSONPath = path.join(app.getPath("userData"), "settings.json")
const hasPlayedJSONPath = path.join(app.getPath("userData"), "hasPlayed.json")

function handleEvents(){
  handleEvent(EventKeys.SELECT_FOLDER, () => dialog.showOpenDialogSync({properties: ['openDirectory']})?.[0] || "")
  handleEvent(EventKeys.SAVE_PROGRAMS, (newSettings) => {
    console.log("Save new programs", newSettings)
    // Save data in settings json file
    const settingsPath = programJSONPath
    fs.writeFileSync(settingsPath, newSettings)
  })
  handleEvent(EventKeys.GET_PROGRAMS, () => {
    // Read data from settings json file
    const settingsPath = programJSONPath
    if (!fs.existsSync(settingsPath)) return ""
    return fs.readFileSync(settingsPath, "utf-8")
  } )
  handleEvent(EventKeys.GET_VIDEOS, (path) => {
    // Read data from settings json file
    return getFilesInFolder(path)
  })
}

function prepairTray(){
  const iconPath = path.join(__dirname, "../../src/images/logo-kabelkrant-manager.png")
  const icon = nativeImage.createFromPath(iconPath)
  tray = new Tray(icon)

  const contextMenu = Menu.buildFromTemplate([
    { label: "Open", click: () => createWindow() },
    { label: "Quit", click: () => app.quit() }
  ])
  tray.setContextMenu(contextMenu)
  tray.on("click", () => createWindow())
  tray.setToolTip("Kabelkrant Manager")
}

app.whenReady().then(() => {
  startPlayoutServer(programJSONPath, hasPlayedJSONPath)
  prepairTray()
  handleEvents()
  createWindow()
})



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
