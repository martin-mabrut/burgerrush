import { genererRecetteAleatoire } from "./recetteAleatoire.js";
import { viande, condiment, sauce, fromage, supplément, categories } from "./data.js";
import { selectOrNot } from "./selectOrNot.js"
import { comparerRecette, getRecetteJoueur } from "./comparatifRecette.js"; //import rajouté

function main() {

let ingredients = document.querySelectorAll(".ingredient");
ingredients.forEach(el => el.addEventListener("click", selectOrNot));

let recetteAttendue = genererRecetteAleatoire();
let bonnesCommandes = 0;
const compteur = document.getElementById("compteur");

document.querySelector("btn-envoyer").addEventListener("click", () => {
  const recetteJoueur = getRecetteJoueur();
  const resultat = document.getElementById("resultat");

  if (comparerRecette(recetteJoueur, recetteAttendue)) {
    resultat.textContent = "Commande réussie ! 🤯​👌​ ";
    bonnesCommandes += 1;
    console.log("Nombre de bonnes commandes :" + bonnesCommandes);
  } else {
    resultat.textContent = "Raté ! 🤡🫵​ Ta recette 💩​ : " + recetteJoueur.join(", ");
    console.log("Nombre de bonnes commandes :" + bonnesCommandes);
  }
  compteur.textContent = "Score : " + bonnesCommandes;
  recetteAttendue = genererRecetteAleatoire();
});
};

main();
