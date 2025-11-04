const { app, BrowserWindow, Tray, Menu, shell } = require('electron');
const path = require('path');

let splash;
let mainWindow;
let tray;

function createWindows() {
  splash = new BrowserWindow({
    width: 600,
    height: 400,
    frame: false,
    resizable: true,
    movable: false,
    fullscreenable: false,
    icon: path.join(__dirname, 'assets', 'logo.png')
  });

  splash.loadFile('splash.html');

  setTimeout(() => {
    splash.close();

    mainWindow = new BrowserWindow({
      width: 1000,
      height: 700,
      frame: false,
      resizable: true,
      movable: false,
      fullscreenable: false,
      icon: path.join(__dirname, 'assets', 'logo.png'),
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true
      }
    });

    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile('index.html');

    // ✅ Crear el icono de bandeja
    tray = new Tray(path.join(__dirname, 'assets', 'logo.png'));
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Actualizar Launcher',
        click: () => {
          shell.openExternal('https://holderniinc.github.io/NI_Inc/V2FA.html');
        }
      },
      {
        label: 'Cerrar Launcher',
        click: () => {
          app.quit();
        }
      }
    ]);
    tray.setToolTip('NI Inc Launcher');
    tray.setContextMenu(contextMenu);
  }, 3000);
}

app.whenReady().then(createWindows);