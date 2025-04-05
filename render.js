const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

button1.addEventListener('click', () => {
    console.log('1clicked');
    window.electronAPI.openChatboxWindow();
});

button2.addEventListener('click', () => {
    console.log('2clicked');
    window.electronAPI.openListWindow();
});

button3.addEventListener('click', () => {
    console.log('3clicked');
    window.electronAPI.openTimerWindow();
});

button4.addEventListener('click', () => {
    console.log('4clicked');
    window.electronAPI.openRecipesWindow();
});
