/*function greet(){
    console.log("helloooor!")
}

greet()

 //function expressions
 function somme(a,b){
    return a + b
 }

 let sm= somme(5,9)

 console.log(sm);*/

//les fonctions fléchées (arrow function)

let a= function(){
    return console.log("hello world");
};

let greet = () => console.log("helloor isfo");


let nomcomplet = (nom,prenom) => {
    let fullname = nom+" "+prenom;

    return fullname;

}

console.log(nomcomplet("aitsaid","kawtar"));

greet();

//les expressions lambdas
//Map( methode qui retourne un nv tableau)

const jours = ["lundi","mardi","mercredi","jeudi","vendredi"]

jours.map((item) => {
    if (item ==="jeudi") {
        item = item + "* jour férier"
    }

    return console.log(item)

});

console.log(jours)

/*const stagiaire = [
    {nom:"aitsaid",prenom:"kawtar",age:18},
    {nom:"ennadi",prenom:"romayssa",age:18},
];
stagiaire_names = stagiaire.map((info) => {
    nomcomplet = info["nom"] + " " + info["prenom"]
    return nomcomplet
});

console.log(stagiaire)
console.log(stagiaire_names)






