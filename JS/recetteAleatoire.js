import { viande, condiment, sauce, fromage, supplément } from "./data.js";

function genererRecetteAleatoire() {
  const viandeAuHasard = viande[Math.floor(Math.random() * viande.length)];
  const condimentAuHasard = condiment[Math.floor(Math.random() * condiment.length)];
  const sauceAuHasard = sauce[Math.floor(Math.random() * sauce.length)];
  const fromageAuHasard = fromage[Math.floor(Math.random() * fromage.length)];
  const supplémentAuHasard = supplément[Math.floor(Math.random() * supplément.length)];

  const recetteAuHasard = `${sauceAuHasard}, ${condimentAuHasard}, ${viandeAuHasard}, ${fromageAuHasard}, ${supplémentAuHasard}`
  document.querySelector(".commande").innerText = `${recetteAuHasard}, chef ! `;

  const numeroClientAuHasard = Math.floor(Math.random() * 9) + 1;
  document.querySelector(".container-img-client img").src = `image/client${numeroClientAuHasard}.png`;

  return recetteAuHasard;
}

export { genererRecetteAleatoire };
