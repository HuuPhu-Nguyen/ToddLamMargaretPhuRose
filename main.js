const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let timer = null;
let recipes=null;

const createHomePage = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload:path.join(__dirname, 'preload.js'),
        }
    });
    win.loadFile('windows/homepage.html');
};

app.whenReady().then( () => {
    createHomePage();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createHomePage()
    })

    recipes = JSON.parse(fs.readFileSync('data/recipes.json'));
    timer = require(path.join(__dirname,'data/cookingTimer.json'));
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('open-list-window', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        //webPreferences: {
           // preload:path.join(__dirname, 'preloa
        // d.js'),
        //}
    });
    win.loadFile('windows/groceryList.html');
})

ipcMain.on('open-timer-window', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
         preload:path.join(__dirname, 'preload.js'),
        }
    });
    win.loadFile('windows/boildeggs.html');
})

ipcMain.on('open-chatbox-window', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
         preload:path.join(__dirname, 'preload.js'),
        }
    });
    win.loadFile('index3.html');
})

ipcMain.on('open-recipes-window', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        //webPreferences: {
        // preload:path.join(__dirname, 'preload.js'),
        //}
    });
    win.loadFile('windows/recipes.html');
})

ipcMain.handle('get-recipes', () => {
    return timer;
})