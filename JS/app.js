import { genererRecetteAleatoire } from "./recetteAleatoire.js";
import { viande, condiment, sauce, fromage, supplément, categories } from "./data.js";
import { selectOrNot } from "./selectOrNot.js"
import { comparerRecette, getRecetteJoueur } from "./comparatifRecette.js"; //import rajouté

function main() {

let ingredients = document.querySelectorAll(".ingredient");
ingredients.forEach(el => el.addEventListener("click", selectOrNot));

const recetteAttendue = genererRecetteAleatoire();

document.querySelector("button").addEventListener("click", () => {
  const recetteJoueur = getRecetteJoueur();
  const resultat = document.getElementById("resultat");

  if (comparerRecette(recetteJoueur, recetteAttendue)) {
    resultat.textContent = "Commande réussie ! 🤯​👌​ ";
  } else {
    resultat.textContent = "Raté ! 🤡🫵​ Ta recette 💩​ : " + recetteJoueur.join(", ");
  }
});
};

main();
