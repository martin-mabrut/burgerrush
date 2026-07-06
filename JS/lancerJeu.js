function lancerJeu() {

    document.querySelector(".intro").style.display = "none";
    document.querySelector("main").style.display = "flex";

      const musique = document.getElementById("musique");
      musique.play();

      // Récupère les éléments HTML affichant les minutes et secondes.
      const minutes = document.getElementById('minute');
      const secondes = document.getElementById('secondes');

      // Définit l'heure de fin : maintenant + 2 minutes en millisecondes pour getTime
      const targetDate = new Date().getTime() + 2 * 60 * 1000;

      // Fonction appelée chaque seconde pour mettre à jour le chrono (écoulement du temps)
      function timer() {
        const currentDate = new Date().getTime();       // Heure actuelle
        const distance = targetDate - currentDate;       // Temps restant en millisecondes

        // L'heure actuelle va avancer, là où la targetDate reste figée. Donc l'écart va diminuer.

        const min = Math.floor((distance / 1000 / 60));  // Convertit en minutes restantes
        const sec = Math.floor((distance / 1000) % 60);        // Convertit en secondes restantes

        // Math floor permet d'avoir les minutes entières

        minutes.innerHTML = String(min).padStart(2, '0');      // Affiche les minutes et secondes au format 2 chiffres
        secondes.innerHTML = String(sec).padStart(2, '0');    // String car padStart agit sur les strings, 0 pour dire qu'en cas de chiffre unique on met un 0 devant. 05 pour 5 mais 12 reste 12

        if (distance < 0) {              // Si le temps est écoulé, à 0 donc
          clearInterval(interval);       // Arrête le chrono
          minutes.innerHTML = '00';      // Force l'affichage à 00, juste un confort visuel
          secondes.innerHTML = '00';
         finDuJeu();                    // Déclenche l'écran de fin
        }
      }

      const interval = setInterval(timer, 1000);  // Lance timer() toutes les secondes (1000 ms)

      // Cache le jeu et affiche l'écran de fin
      function finDuJeu() {
        document.querySelectorAll("main > *").forEach(el => el.classList.add("cache"));  // Cache tous les enfants directs de main en lui attribuant la classe cache (en display none)
        document.getElementById("ecran-fin").classList.remove("cache");                  // Enlève la classe cache à l'écran de fin
      }
}

export { lancerJeu };

