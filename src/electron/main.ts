import {app, BrowserWindow  } from 'electron';
import path from 'path';
import { isDev } from './util.js';
import { createMenu } from './menu.js';




app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  })
  if(isDev()){ 
    mainWindow.loadURL("http://localhost:4321");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-astro/index.html"))
  }

  createMenu(mainWindow);
})

