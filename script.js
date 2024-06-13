document.addEventListener("DOMContentLoaded", function() { 
    document.querySelector(".cadre button[type='submit']").addEventListener("click", function(e) {
            e.preventDefault();  
            let email = document.getElementById("Email").value;
            let confirmEmail = document.getElementById("confirmerEmail").value;
     
            if (email !== confirmEmail) { 
                alert("Les adresses e-mail ne correspondent pas. Veuillez rectifier.");
    //  encadrement rouge
                document.getElementById("Email").style.borderColor = "red";
                document.getElementById("confirmerEmail").style.borderColor = "red";
            } else { 
                document.getElementById("Email").style.borderColor = "";
                document.getElementById("confirmerEmail").style.borderColor = "";
     
                document.querySelector(".cadre form").submit();
            }
        });
    });