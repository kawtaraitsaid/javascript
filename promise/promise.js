getStagiaires().then(
    stagiaire=>{
        console.log(stagiaire);
        return getModules()
    }
).then(modules => {
    console.log(modules);
    return getNotes
})  