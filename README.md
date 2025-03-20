# Application Météo

## Description

L'application météo permet à l'utilisateur de consulter les conditions météorologiques actuelles d'une ville donnée. L'application récupère les données météorologiques à partir de l'API OpenWeatherMap et les affiche dynamiquement dans le navigateur.

## Étapes suivi pour la mise en place du projet

### 1. Créer un nouveau dossier pour le projet

Commencez par créer un dossier pour votre projet. Vous pouvez nommer ce dossier comme vous le souhaitez, par exemple `mon-application-meteo`.

### 2. Créer les fichiers nécessaires

Dans le dossier créé, créez trois fichiers :

- **index.html** : Le fichier contenant la structure HTML de base.
- **styles.css** : Le fichier contenant les styles CSS pour votre application.
- **script.js** : Le fichier contenant le code JavaScript pour récupérer et afficher les données météo.

### 3. Structure HTML

Dans le fichier `index.html`, créez la structure HTML de base :

- Ajoutez la déclaration `<!DOCTYPE html>` au début du fichier.
- Créez les balises `<html>` et `<head>`, puis ajoutez les balises méta nécessaires pour définir l'encodage des caractères et la compatibilité avec les navigateurs.
- Dans la balise `<head>`, liez également le fichier CSS (`styles.css`).
- Créez une section `<body>` où vous ajouterez les éléments de l'interface utilisateur, tels qu'un champ de texte pour entrer une ville, un bouton pour obtenir la météo et une zone pour afficher les résultats.

### 4. Style de l'application avec CSS

Dans le fichier `styles.css`, ajoutez des styles pour personnaliser l'apparence de l'application :

- Appliquez des styles pour le fond de la page, les tailles et les polices des éléments, ainsi que l'alignement des éléments au centre de l'écran.
- Utilisez des classes et des ID pour cibler des éléments spécifiques dans votre HTML.
- Ajoutez des media queries pour rendre l'application responsive, c'est-à-dire adaptée à différentes tailles d'écran (mobile, tablette, bureau).

### 5. JavaScript pour récupérer les données météorologiques

Dans le fichier `script.js`, écrivez le code JavaScript pour récupérer les données météo à partir d'une API. Voici les étapes à suivre :

- Utilisez la méthode `fetch()` ou une bibliothèque comme Axios pour envoyer une requête à l'API météo (par exemple, OpenWeatherMap).
- Une fois la réponse reçue, analysez les données JSON pour extraire les informations pertinentes (par exemple, la température, la description et le nom de la ville).
- Mettez à jour le contenu de la page HTML pour afficher ces informations de manière dynamique.

### 6. Obtenir une clé API gratuite pour OpenWeatherMap

Je ne peux pas vous fournir directement une clé API valide, car les clés API sont personnelles. Cependant, voici comment vous pouvez obtenir une clé API gratuite pour OpenWeatherMap :

#### Inscription sur OpenWeatherMap :

1. Rendez-vous sur le site [OpenWeatherMap](https://openweathermap.org/).
2. Créez un compte en cliquant sur "Sign Up" (S'inscrire).
3. Une fois inscrit, connectez-vous à votre compte.

#### Accéder à la clé API :

1. Après vous être connecté, allez dans la section "API Keys" (Clés API) de votre compte (généralement accessible depuis votre tableau de bord).
2. Vous trouverez une clé API par défaut, ou vous pouvez en créer une nouvelle si nécessaire.

#### Utiliser la clé API dans votre projet :

1. Copiez la clé API qui vous est attribuée et collez-la dans votre code à la place de `'votre_clé_api'` dans l'exemple JavaScript.

### 7. Tester votre application

Une fois que vous avez terminé, ouvrez le fichier `index.html` dans un navigateur web pour tester votre application :

- Entrez une ville dans le champ de texte et cliquez sur le bouton pour obtenir la météo.
- Vérifiez que les informations de la météo (température, description, ville) sont bien affichées.
- Assurez-vous que l'interface est bien responsive et fonctionne correctement sur différentes tailles d'écran.

### 8. Vérification et résolution des problèmes

- Si l'application ne fonctionne pas correctement, ouvrez la console de votre navigateur pour vérifier s'il y a des erreurs JavaScript.
- Vérifiez que vous avez bien inséré une clé API valide pour OpenWeatherMap.
- Testez plusieurs villes pour vérifier que les données sont bien récupérées et affichées.

## Prérequis

- Un éditeur de texte (par exemple, [Visual Studio Code](https://code.visualstudio.com/)).
- Une connexion Internet pour accéder à l'API météo et récupérer les données.

## Licences

Le projet est sous licence [MIT](https://opensource.org/licenses/MIT).

---

Ce fichier README fournit une documentation simple et concise pour guider un utilisateur ou un développeur dans la mise en place et l'utilisation de l'application météo, y compris les instructions pour obtenir une clé API gratuite.