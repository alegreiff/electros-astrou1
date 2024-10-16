import { app, BrowserWindow, Menu } from "electron";

export function createMenu(mainWindow: BrowserWindow) {
Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: process.platform === "darwin" ? "Los gatos" : "Biko",
    type: "submenu",
    submenu: [
      {
        label: "Biko"
      },{
        label: "Salir", 
        click: app.quit,
      }
    ]
  },{
    label: process.platform === "darwin" ? "Los gatos" : "Biko",
    type: "separator",
    submenu: [
      {
        label: "Biko"
      }
    ]
  },
  {
    label: process.platform === "darwin" ? "Los gatos" : "Biko",
    type: "submenu",
    submenu: [
      {
        label: "Suki"
      }
    ]
  }
]))
}