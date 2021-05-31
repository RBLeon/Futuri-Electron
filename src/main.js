const { app, BrowserWindow } = require ('electron')

let win;

function createWindow() {
  //create the browser window
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    backgroundColor: '#ffffff'
  })

  win.loadURL('file://${__dirname}/dist/index.html')

  //uncomment below for devtools
  //win.webContents.openDevTools()

  win.on('closed', function () {
    win = null
  })

  app.on('ready', createWindow)

  app.on('window-all-closed', function () {

    //MacOs specific
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', function () {
    //macOs specific close
    if (win === null) {
      createWindow()
    }
  })
}
