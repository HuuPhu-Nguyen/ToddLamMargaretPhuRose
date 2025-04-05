

async function getRecipes(){
    const jsonObj = await window.electronAPI.getRecipes();
    return jsonObj
}

console.log(getRecipes());