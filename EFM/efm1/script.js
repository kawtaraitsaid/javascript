

document.addEventListener('DOMContentLoaded', function() {
    var boutonAjouter = document.getElementById('boutonAjouter');
    boutonAjouter.addEventListener('click', function() { 


        var description = document.createElement('input');
            description.setAttribute('type','text');
        var titre = 
        var listeCategories = document.getElementById('listeCategories');
        var categories = [
            {"id":1, "libelle":"Informatique"},
            {"id":2, "libelle":"Bureautique"},
            {"id":3, "libelle":"Matériel"},
            {"id":4, "libelle":"Scolaire"}
        ];


         // Boucle à travers les catégories et crée des éléments HTML pour les afficher
         categories.forEach(function(categorie) {
             // Crée un élément de paragraphe pour afficher la catégorie
             var paragraphe = document.createElement('p');
             paragraphe.textContent = "ID : " + categorie.id + ", Libellé : " + categorie.libelle;

             // Ajoute la classe "selected-row" à chaque paragraphe si nécessaire
             paragraphe.classList.add('selected-row');

             // Ajoute le paragraphe à l'élément conteneur
             listeCategories.appendChild(paragraphe);
         });
    });
});
