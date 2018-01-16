# LetsBet
## Contexte 
LetsBet est une application web développée par Mondaini Alessandro et Christe Thibaud 
dans le cadre du cours " Projet de Technologies Web de présentation " de la Haute Ecole de Gestion de Neuchâtel, donné par M.Fritscher.

## Description
LetsBet est une application web de paris sportifs. Les utilisateurs peuvent se connecter à l'aide de leur compte Google ou alors en créant un compte classique (e-mail). Une fois connecté, l'utilisateur a accès à une liste de matchs dont il peut essayer de deviner le score. Selon le résutat du match, l'utilisateur se verra attribuer un nombre de points. S'il trouve le résultat exact il gagne 100 points, s'il trouve le résultat (1N2) il remporte 30 points sinon il n'obtient aucun point. Le but du joueur est d'engranger le maximum de points pour figurer le plus haut possible dans le classement. Le site est disponible [ici](https://heg-web.github.io/projet-letsbet_christe_mondaini/#/login). 

## Outils utilisés
1. [VueJS](https://vuejs.org/)
2. [Bootstrap](https://getbootstrap.com/)
3. [Bootstrap-material-design](https://fezvrasta.github.io/bootstrap-material-design/)
4. [Vue Chart.js](http://vue-chartjs.org)
5. [FireBase](https://firebase.google.com/)
6. [FireBaseUi](https://github.com/firebase/firebaseui-web)
7. [VueFire](https://github.com/vuejs/vuefire)
8. [Git](https://git-scm.com/)
9. [GitHub](https://github.com/)
10. [API football-data.org](football-data.org/)

## Démarche
Pour réaliser ce projet, nous avons suivi la démarche suivante :
1. Réflexion sur les fonctionnalités attendues par l'application. 
2. Priorisation de ces même fonctionnalités dans l'ordre suivant : 

Objectifs principaux
- Récupération des matchs d'un championnat défini depuis une API 
- Ajout d'un système d'authentification 
- Validation des résultats et attribution des points manuellement. 

Objectif secondaire 
- Ajout d'un classement
- Statistiques sous forme de graphique
- Validation automatique des résultats
- Ajout d'une page avec les détails du compte utilisateur.

2. Réalisation d'une maquette de l'interface principale maquette (le fichier Pencil est disponible [ici](https://github.com/heg-web/projet-letsbet_christe_mondaini/tree/master/doc/)) :

![Maquette](https://raw.githubusercontent.com/heg-web/projet-letsbet_christe_mondaini/master/doc/Home-maquette.PNG)
 
3. Développement
4. Mise en production
5. Documentation

## Structure de l'application
![Architecture](https://raw.githubusercontent.com/heg-web/projet-letsbet_christe_mondaini/master/doc/Architecture.PNG)

## Problèmes rencontrés et solutions
Durant le développement, nous avons rencontré les problèmes suivants : 

1. Premièrement, nous avons eu un peu de peine à nous familiariser avec l'environnement de VueJs. A force d'entrainement, nous avons petit à petit pu développer plus rapidement.

2. Puis, nous avons eu de la peine avec l'ordre de chargement des éléments des composants. Par exemple les données provenant de sources externes (firebase ou API) prenaient plus de temps que la page pour charger ce qui provoquait des erreurs (variables null) nous avons solutionné ce problème à l'aide des promises.

3. Pour finir, lors de la validation des scores nous faisions un appel de l'API à chaque score qui était dans l'état non-validé. Cela fonctionnait correctement quand nous avions peu de scores à évaluer. Mais lors d'un test de plus grandes ampleurs, l'API bloquait une partie des requêtes. Nous avons donc modifié notre algorithme pour récupérer tous les matchs d'une seule traite et ainsi d'accéder qu'une seule fois à l'API

## Conclusion
### Améliorations possibles
Nous avons pu implémenter tous les objectifs principaux pour avoir une application fonctionnelle. Mais malheureusement, nous n'avons pas pu implémenter l'entièreté des objectifs secondaires. Au fil du projet, nous avons également pensé à quelques améliorations supplémentaires qui seraient intéressantes. Voici une liste non exhaustive des améliorations qui seraient intéressantes à réaliser : 

- Evaluation automatique des résultats (Exemple : tous les jours à minuit)
- Ajout d'une page avec les détails du compte utilisateur. (modification de l'image, pseudo, etc.)
- Ajout d'autres compétitions et championnats
- Ajout de catégories pour pouvoir ajouter d'autres sports. 
- ...

### Retour d'expérience
Dans l'ensemble, notre projet c'est plutôt bien déroulé tant sur le plan organisationnel que sur la partie de développement. Ce projet nous a été très bénéfique. Il nous a permis de consolider nos connaissances acquises par le passé en Javascript et nous faire découvrir VueJS que nous ne n'avions jamais utilisé auparavant. 

## Installation du projet
1. Clonage du projet git : ```git clone https://github.com/heg-web/projet-letsbet_christe_mondaini.git```
2. Installation des dépendances : ```npm install```
3. Démarrage du serveur de développement : ```npm run dev```

