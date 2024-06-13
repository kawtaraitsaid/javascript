// const stagiaire = {
//     "id":1,
//     "nom":"aitsaid",
//     "prenom":"kawtar",
//     "age":18,
// }
// //objet JS ===> objet JYSON
// let stagiaireJson = JSON.stringify(stagiaire);
// console.log(stagiaire);
// console.log(stagiaireJson);
// //objet JSON ===> objet JS
// stagiaireJson = JSON.parse(stagiaireJson);
// console.log(stagiaireJson.nom);

document.getElementById("btn-load").addEventListener("click",loadTxt);

function loadTxt(e) {
    e.preventDefault();

    let request = new XMLHttpRequest();

    request.open("GET","sample.txt",true);

    request.onreadystatechange = function(){
         if (this.readyState == 4 && this.status == 200){
         document.getElementById("container").innerHTML =this.responseText
    }
    }
     request.send()
    }
