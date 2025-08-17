import { app, BrowserWindow, screen } from "electron";

// Magic constants auto-injected by Forge/Webpack:
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

// ---- IPC HANDLERS HERE ----

// ---- WINDOW CREATION ----

const createWindow = (): void => {
  const { width, height, x, y } = screen.getPrimaryDisplay().workArea;
  const mainWindow = new BrowserWindow({
    x,
    y,
    width,
    height,
    minWidth: 1280,
    minHeight: 720,
    frame: true,
    resizable: true,
    autoHideMenuBar: true, // ← hide menu bar by default
    movable: true,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // Optional: Force window size on maximize
  mainWindow.on("maximize", () => {
    mainWindow.setSize(1280, 720);
    mainWindow.center();
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

// App events
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
