import { genererRecetteAleatoire } from "./recetteAleatoire.js";
import { viande, condiment, sauce, fromage, supplément, categories } from "./data.js";
import { selectOrNot } from "./selectOrNot.js"

function main() {

let ingredients = document.querySelectorAll(".ingredient");
ingredients.forEach(el => el.addEventListener("click", selectOrNot));

genererRecetteAleatoire();

};

main();
