// Configuration ESLint (format "flat config", par défaut depuis ESLint 9)
import js from "@eslint/js";
import globals from "globals";

export default [
  // Règles recommandées par ESLint : variables inutilisées, variables non définies, etc.
  js.configs.recommended,

  // Réglages spécifiques au code du jeu
  {
    files: ["JS/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",     // Syntaxe JavaScript la plus récente
      sourceType: "module",      // Le jeu utilise import / export
      globals: globals.browser,  // Variables du navigateur : document, console, setInterval…
    },
  },
];
