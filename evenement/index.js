document.querySelector("div").style.border="1px solid black"
document.querySelector("div").style.width="200px";
let stagiaires=[];
let stagiaire={
    nom:nom,
    prenom:prenom,
    age:age
}
document.querySelector(".Afficher").addEventListener("click", function(){
    let nom = document.getElementById('nom').value;
    let  prenom = document.getElementById('prenom').value;
    let  age = document.getElementById('age').value;

    stagiaire.nom=nom
    stagiaire.prenom=prenom
    stagiaire.age=age
    stagiaires.push(stagiaire)

    console.log(stagiaires)

})
stagiaires.map(function(item))
let h1=


document.querySelector(".ajouter").addEventListener("click", function(){
  
})




