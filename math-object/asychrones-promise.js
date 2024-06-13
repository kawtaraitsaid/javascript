// const stagiaires = getData().then(function)
const stagiaire2 = []
const stagiaires = getData().then(function(response){
    console.log(response);
    return getNotes()
}).then(function(response){
    console.log(response)
    stagiaire2 = response.filter(function(itemValue){
        return itemValue.idStagiaire ===2
    })
}).catch(function(error){
        console.log(error)
})
//   producteur de la promise
// function getData(){
//     let vfound = false
//     return new Promise(function(resolve,reject){
//          if(vfound === true) {
//             resolve([
//                 [
//                     {id :1,nom:"aitsaid"}, nom:"kawtar"}, 
//                     {id :1,nom:"aitsaid"}, nom:"kawtar"},
//                     {id :1,nom:"aitsaid"}, nom:"kawtar"},
//                 ],
//             ]);
         
//          }else{ 
//              reject("not allowed");
//     }
//    });
//     }
    
 
function getNotes (){
    return new Promise(function(resolve, reject){
        resolve([
            {idStagiaire:1, module:"javascript", not:"14"},
            {idStagiaire:1, module:"html", not:"15"},
            {idStagiaire:1, module:"poo", not:"10"},
            {idStagiaire:2, module:"javascript", not:"9"},
            {idStagiaire:2, module:"html", not:"11"},
            {idStagiaire:2, module:"poo", not:"13"},
            {idStagiaire:3, module:"javascript", not:"10"},
            {idStagiaire:3, module:"phtmloo", not:"14"},
            {idStagiaire:3, module:"poo", not:"15"},
        ])

    })
}
getStagiaires().then(
    stagiaire=>{
        console.log(stagiaire);
        return getModules()
    }
).then(modules => {
    console.log(modules);
    return getNotes
}).then(notes => {
    console.log(notes);
}).then(function(error){
    console.log(error)
}).finaly(function(){
    console.log("finallyyyy!!")
});

// ASYNC AWAIT METHOD
async function executerCeCode(){
    let vNotes = 4
    try{
        const stagiaires = await getStagiaires();
        const modules = await getModules();
        const notes = await getNotes();
        console.log(stagiaires);
        console.log(modules);
        console.log(notes);
        //error personalise
        if (vNotes < 5){
            throw ("la note est inf a 5");
        }

    }catch(erro){
        console.log(erro);
    }finally{
        console.log("remove loading ....")
    }
};

executerCeCode();
