import { app, BrowserWindow, Menu } from "electron";

export function createMenu(mainWindow: BrowserWindow) {
Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: ""
  },
  {
    label: process.platform === "darwin" ? undefined : "Biko",
    type: "submenu",
    submenu: [
      {
        label: "Biko"
      },{
        label: "Salir", 
        click: app.quit,
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q"
      }
    ]
  },{
    label: process.platform === "darwin" ? "Los gatos" : "Biko",
    type: "separator",
    submenu: [
      {
        label: "Pixie"
      }
    ]
  },
  {
    label: "Otro menú",
    type: "submenu",
    submenu: [
      {
        label: "Suki"
      }
    ]
  }
]))
}