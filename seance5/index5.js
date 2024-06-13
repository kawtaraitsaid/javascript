let vDate = new Date().getDate();
let jour;
switch(vDate){
        case 0:
        jour="sunday"
        break;
        case 1:
        jour="monday"
        break;
        case 2:
        jour="tuesday"
        break;
        case 3:
        jour="wesnesday"
        break;
        case 4:
        jour="thursday"            
        break;            
        case 5:
        jour="friday"
        break;
        case 6:
        jour="saturday"
        break;
       
 }

 //console.log("c'est :"+jour)



 let abreviation;
 let branche;

 abreviation="WD"

 switch(abreviation){
    case"DD":
      branche="developpement digital";
      break;
    case"ID":
      branche="infrastructure digital"
      break;
    case"WD":
      branche="web designeur"
      break;
    default:branche="";

 }
//console.log("la branche :",branche)

let jours = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
 for (i=0; i<=4; i++){
    console.log(jours[i])
 }
 for(item in jours){
    console.log(jours[item]);
 }
 for(jr of jours ){
    console.log(jr);
 }
  let txt="";
  jours.forEach(myFunction)
  function myFunction(value,index,array) {
   txt += value +"";
  }
  console.log(txt)
  //la boucle while
  let n=10;
  while (n>=0){
   console.log(n)
    n = n-1
  }
  do{
    console.log(n)
    n = n-1
   
  }
while(n >=0)

for (i =0; i < 5;i++)
{
   if (i ===2) 
   console.log("stopped")
   continue;
}
console.log("le nombre e est :"+i)