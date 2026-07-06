import { genererRecetteAleatoire } from "./recetteAleatoire.js";
import { viande, condiment, sauce, fromage, supplément, categories } from "./data.js";
import { selectOrNot } from "./selectOrNot.js"
import { comparerRecette, getRecetteJoueur } from "./comparatifRecette.js"; //import rajouté
import { lancerJeu } from "./lancerJeu.js";

export let bonnesCommandes = 0;

function main() {

document.getElementById("btn-musique").addEventListener("click", lancerJeu);

let ingredients = document.querySelectorAll(".ingredient");
ingredients.forEach(el => el.addEventListener("click", selectOrNot));

let recetteAttendue = genererRecetteAleatoire();
const compteur = document.getElementById("compteur");

document.getElementById("btn-envoyer").addEventListener("click", () => {
  const recetteJoueur = getRecetteJoueur();
  const resultat = document.getElementById("resultat");

  if (comparerRecette(recetteJoueur, recetteAttendue)) {
    resultat.textContent = "Commande réussie ! 🤯​👌​ ";
    bonnesCommandes += 1;
    console.log("Nombre de bonnes commandes :" + bonnesCommandes);

    let ingredientsSelected = document.querySelectorAll(".selected");
    ingredientsSelected.forEach(el => {
      document.querySelector(".ingredients").appendChild(el);
      el.classList.remove("selected");
    });


    recetteAttendue = genererRecetteAleatoire();
  } else {
    resultat.textContent = "Raté ! 🤡🫵​ Ta recette 💩​ : " + recetteJoueur.join(", ");
    console.log("Nombre de bonnes commandes :" + bonnesCommandes);
  }
  compteur.textContent = "Score : " + bonnesCommandes;
});
};

main();
