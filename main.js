const { app, BrowserWindow, Menu} = require('electron')

const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname,'preload.js')
        }
    })
    win.loadFile('index.html')
}


app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)

    Menu.setApplicationMenu(mainMenu);
})

const mainMenuTemplate = [
    {
        label : "Dosya",
        submenu: [
            {
                label : "Not Ekle"
            },
            {
                label: "Hepsini Sil"
            },
            {
                label: "Çıkış"
            }
        ]
    },
    {
        label : "Yardım"
    },
    {
        label: "Pal Notes Hakkında"
    }
]
