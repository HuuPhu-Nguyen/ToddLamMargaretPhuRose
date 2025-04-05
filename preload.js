const { contextBridge,ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openListWindow: () => ipcRenderer.send('open-list-window'),
    openTimerWindow: () => ipcRenderer.send('open-timer-window'),
    openChatboxWindow: () => ipcRenderer.send('open-chatbox-window'),
    openRecipesWindow: () => ipcRenderer.send('open-recipes-window'),
    getRecipes: () => ipcRenderer.send('get-recipe'),
    getTimer: () => ipcRenderer.invoke('get-timer'),
});

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }

})
