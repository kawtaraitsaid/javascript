// document.getElementById("nom").addEventListener("keydown",function(event){
//     if (event.keyCode=== 13){
//         console.log("u clicked on enter )))down !")
//     }
//     })

// document.getElementById("nom").addEventListener("keypress",function(event){
//     if (event.keyCode===13){
//         console.log("u clicked on enter  press !")
//     }
// })


// document.getElementById("nom").addEventListener("keypress",function(event){
//     if (event.keyCode===27){
//         console.log("u clicked on enter  press !")
//     }
// })


document.getElementById(".btn-ajouter").addEventListener("click",fuction(e){
      e.preventDefault();

      let username= getInputName(".txt-username");
      let email = getInputName(".txt-email");
      let password = getInputName(".txt-password");
      let username_error = getInputName(".username-span");
      let email_error = getInputName(".email-span");
      let passwor_error = getInputName(".password-span");
     
})