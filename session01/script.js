const stagiaire = {
    nom:"aitsaid",
    prenom:"kawtar",
    branche:"dd"
};

console.log(stagiaire);
stagiaire.branche = "dev";
console.log(stagiaire);
delete stagiaire.branche;
console.log(stagiaire);


const stagiaire = new Array("romayssa","raghad","asmaa","nadia");//for a new array

console.log(stagiaire.lenght);
console.log(stagiaire[1]);
console.log(stagiaire.indexOf("romayssa"));
console.log(stagiaire.indexOf("raghad"));
console.log(stagiaire.indexOf("romayssa"));
