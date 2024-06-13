// document.getElementById("btn-google").addEventListener("click",function(){
//     // open("https://www.google.com/")
// })

// let b = 19;
// let somme = a + b
// console.log(somme)

// setInterval(function(){
//     i++;
//     console.log(i);
// },1000)
// appels asychrone

let stagiaires = getData(function(listStagiaires){
    console.log(listStagiaires)
})

console.log(stagiaires)

function getData(myCallBackFunction){
    setTimeout(function(){
    return myCallBackFunction(["ennadi","moumkine","ghiyati"]) ;  
    },200) 

}
// setTimeout(function(){
//     console.log("okey 5 seconds ago");
// },5000)