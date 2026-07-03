function comparerRecette(recetteJoueur, recetteAttendue) {
  const attendue = recetteAttendue.split(", ");

  if (recetteJoueur.length !== attendue.length) {
    return false;
  }

  const a = [...recetteJoueur].sort();
  const b = [...attendue].sort();

  return a.every((ingredient, i) => ingredient === b[i]);
}

function getRecetteJoueur() {
  const elementsSelectionnes = document.querySelectorAll(".selected");
  return [...elementsSelectionnes].map(el => el.id);
}

export { comparerRecette, getRecetteJoueur };