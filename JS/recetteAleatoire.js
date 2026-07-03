import { viande, condiment, sauce, fromage, supplément } from "./data.js";

function genererRecetteAleatoire() {
  const viandeAuHasard = viande[Math.floor(Math.random() * viande.length)];
  const condimentAuHasard = condiment[Math.floor(Math.random() * condiment.length)];
  const sauceAuHasard = sauce[Math.floor(Math.random() * sauce.length)];
  const fromageAuHasard = fromage[Math.floor(Math.random() * fromage.length)];
  const supplémentAuHasard = supplément[Math.floor(Math.random() * supplément.length)];

  const recetteAuHasard = `${sauceAuHasard}, ${condimentAuHasard}, ${viandeAuHasard}, ${fromageAuHasard}, ${supplémentAuHasard}`
  console.log(recetteAuHasard);
  return recetteAuHasard;
}

export { genererRecetteAleatoire };
