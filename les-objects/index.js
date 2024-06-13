// function stagiaire(nom,prenom,age,branche){
//     this.nom = nom;
//     this.prenom = prenom;
//     this.age = age;
//     this.branche = branche;
//     this.presenterVous=function(){
//         console.log("I am +" +this.nom+" "+this.prenom)
//     }
// }



// const Stagiaire2 = new stagiaire("HARROUD","MOHAMED",20," INFRA")
// stagiaire1 = {
//     nom :"AITSAID",
//     prenom :"kawtar",
//     age : 18,
//     branche:"dd",
//     presenterVous :function(){
//         console.log("I am " +this.nom+" "+this.prenom)
//     }
// // }
// console.log(stagiaire1.nom);
// console.log(stagiaire1.age);
// console.log(stagiaire1.presenterVous())
   // class Achat{
   //  constructor(id,article,prix,quantite)
   // }

let branche = "DD105";

let nom = "mohamed";
let prenom = "ahmed";
let phrase = "this is a char methode";
console.log(branche.length)
console.log(branche.charAt(3))

console.log(branche.substring(2,5))
// la rend majiscule
console.log(nom.toUpperCase()); 
// miniscul
console.log(nom.toLocaleLowerCase());
// if its does end with d appear true if its not then false
console.log(prenom.endsWith("d"))

console.log(Array.from(prenom));
console.log(phrase.split("-"));

let vDate = new Date();

console.log(vDate);
console.log(vDate.getFullYear());
console.log(vDate.getMonth());
console.log(vDate.getMinutes());
console.log(vDate.getDay());
console.log(vDate.getTime());