LISTE INITIALE DES FONCTIONNALITÉS :

Des ingrédients sont affichés à l'écran : steak, tomate, salade, oignons, fromage, poivrons, sauces, ketchup, moutarde, cornichons...
Une commande est affichée à l'écran exemple (steak, salade, tomate)
L'utilisateur doit cliquer sur les bons ingrédients
Les ingrédients cliqués s'empilent pour former le burger (css, onclick, position)
Un chrono est affiché en temps réel
Un bouton submit permet de valider le burger
Ingrédients triés par catégories (base, sauce, condiments) qui se placent à un endroit précis
Le nombre de burgers réussis est affiché
Un temps global : 2 minutes
Les recettes sont générées avec du JS.

LISTE FINALE DES FONCTIONNALITÉS :

STRUCTURE GENERALE

- Page d'accueil avec logo, titre, sous-titre et bouton "JOUER !"
- Ecran de jeu cache par défaut, affiche au clic sur "JOUER !"
- Ecran de fin de partie, cache par défaut

CHRONO / COMPTE A REBOURS

- Affichage minutes/secondes en temps reel, mis a jour chaque seconde
- Arrêt automatique du chrono a 0
- Déclenchement automatique de la fin de partie quand le temps est écoule

GENERATION DE RECETTES

- Liste d'ingredients classes par categories (viande, condiment, sauce, fromage, supplement) dans data.js
- Generation aleatoire d'une recette (une viande, un condiment, une sauce, un fromage, un supplement)
- Nouvelle recette générée après chaque tentative (bonne ou mauvaise)
- Affichage de la recette sous forme de commande textuelle
- Image d'un client (avatar) associée a chaque commande

SELECTION DES INGREDIENTS

- Ingrédients cliquables affichés a l'ecran
- Gestion de classes par catégorie (type d'ingrédients, sélectionnés ou non).

COMPARAISON RECETTE / COMMANDE

- Récup des ingrédients sélectionnés par le joueur (via leurs id)
- Comparaison recette attendue vs recette du joueur (indépendamment de l'ordre de sélection)
- Message "Commande réussie" ou "Raté" avec affichage de la recette du joueur en cas d'échec
- Burger qui se vide en cas de réussite, à vider manuellement en cas d'échec

SCORE

- Compteur de bonnes commandes
- Incrémentation a chaque commande réussie
- Affichage du score en temps réel dans le cadre résultat

INTERFACE VISUELLE DU BURGER

- Image pain du haut et pain du bas
- Disposition en deux colonnes : ingrédients à gauche, burger à droite

MUSIQUE ET SON

- Musique de fond en boucle
- Lancement de la musique en même temps que la partie
- Son spécifique a la fin de la partie (déclenché une seule fois)
- Coupure de la musique de fond a la fin du jeu

ECRAN DE FIN DE JEU

- Masquage de tous les éléments du jeu (via classe "cache") en début et fin de partie
- Affichage d'une image de fin
- Message de fin
- Affichage du score final 

RESPONSIVE DESIGN

- Media query pour empiler le chrono et le cadre résultat en colonne sur petit écran
- Repositionnement du logo en haut à gauche du header

COLLABORATION GIT/GITHUB

- Dépot partage
- Gestion des droits de collaborateur
- Résolution de conflits de merge via Git
- Branches et commit faits successivement à chaque grande étape du projet