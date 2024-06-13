/*console.log(document.querySelector(".nom").value);

document.querySelector(".nom").value = "kawtar";

console.log(typeof(document.querySelector(".age").value))

let a=(document.querySelector(".number1").value);
a=Number(a)
let b=(document.querySelector(".number2").value);
b=Number(b)

let somme=a+b
document.querySelector(".somme").value = somme


if (somme>20){
    document.querySelector(".somme").style.backgroundColor="yellow";
}
let calculeClick = function (e){
    e.preventDefault();
    console.log("you clicked me !!")
}*/
document.querySelector("btn-calculer")
               .addEventListener("click", function (e){
                e.preventDefault();
                console.log("you clicked me")
               });

let calculerF = (e) => {
    e.preventDefault();
    let n1 = Number(document.querySelector(".nombre-un").value);
    let n2 = Number(document.querySelector(".nombre-deux").value);
    document.querySelector(".somme").textContent = n1 + n2
}

document.querySelector(".btn-calculer").addEventListener("click", calculerF)