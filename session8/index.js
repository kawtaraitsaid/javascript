/*
document.querySelector(".creer-titre").addEventListener("click", function(){
    const parent = document.querySelector(".section-1")

    const titre = document.createElement("h1");
    titre.innerHTML = "this is a title";
    titre.style.backgroundColor = "aqua";
    parent.append(titre)
    const paragraphe = document.createElement("p");
    paragraphe.innerHTML = " lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolore animi?Accusatim ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolore animi?usantium, vitae et? Corporis obcaecati rerum dolor optio nesciunt facilis repudiandae necessitatibus, dignissimos omnis, reiciendis deleniti distinctio quidem temporibus.";
    paragraphe.style.backgroundColor = "yellow";
    paragraphe.style.color = "red";
    parent.append(paragraphe) 

})

//delete element

document.querySelector(".section-supprimer").addEventListener("click", function (){
    const parent = document.querySelector(".section-1");
    const enfant = document.querySelector(".paragraphe-1");
    document.querySelector(".a-supprimer").remove();
    
    parent.removeChild(enfant);
})
*/
document.querySelector(".btn-remplacer").addEventListener("click", function(){
    const parent = document.querySelector(".section-1");
    const ancElement = document.querySelector(".paragraphe-1");
    const nouvElement = document.querySelector(".titre-1");
    
    parent.replaceChild(nouvElement,ancElement)
})

document.querySelector(".btn-creer-conteneur").addEventListener("click", function(){
    const vConteneur = document.createElement("div");
    vConteneur.classList.add("container")
    document.body.append(vConteneur)
})

document.querySelector(".btn-cadre").addEventListener("click", function(){
    
})

//set attibut
const vConteneur.setAttribute(".titre").classList.add



