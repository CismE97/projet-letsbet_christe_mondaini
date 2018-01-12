# LetsBet
## Contexte 
LetsBet est une application web développée par Mondaini Alessandro et Christe Thibaud 
dans le cadre du cours " Projet de Technologies Web de présentation " de la Haute Ecole de Gestion de Neuchâtel, donné part M.Fritcher.

## Description
LetsBet est une application web de paris sportifs. Les utilisateurs peuvent se connecter à l'aide de leur compte Google ou alors en créant un compte classique (e-mail). Une fois l'utilisateur a accès à une liste de match dont il peut deviner le score. Suivant le résutat du match l'utilisateur se verra un nombre de points attribué. Le but du joueur est d'engrenger le maximum de point pour figuer le plus haut possible dans le classement. Le site est disponible [ici](https://heg-web.github.io/projet-letsbet_christe_mondaini/#/login). 

## Outils utilisés
1. VueJS
2. Bootstrap
3. Bootstrap-material-design
4. Chart.js
5. FireBase
6. FireBaseUi
7. VueFire
8. Git
9. GitHub
10. API football-data.org

## Démarche
Pour réaliser ce projet, nous avons suivi la démarche suivante :
1. Réflexion sur les fonctionnalités attendus par l'application. 
2. Priorisation de ces même fonctionnalités comme ceci : 

Objectifs principaux
- Récupération des matchs d'un championat défini depuis une API 
- Ajout d'un système d'authentification 
- Evaluation des résultats et attribution des points manuellement. 

Objectif secondaire 
- Ajout d'un classement
- Statistiques sous forme de graphique
- Evaluation résultats automatique 
- Ajout d'une page avec les détails du compte utilisateur.

2. Réalisation d'une maquette de l'interface principal maquette (le fichier pencil est disponible [ici](https://github.com/heg-web/projet-letsbet_christe_mondaini/tree/master/doc/)) : 
![Maquette](https://raw.githubusercontent.com/heg-web/projet-letsbet_christe_mondaini/master/doc/Home-maquette.PNG)

3. Développement
4. Mise en production
5. Documentation

## Structure de l'application
// Ajouter des schémas (imbrications des composants + accès aux données). 

## Problèmes rencontrés et solutions
Durant le développement, nous avons rencontrés les problèmes suivants : 

1. Premièrement, nous avons eu un peu de peine à se familiariser avec l'environnement de VueJs. A force d'entrainement, nous avons petit à petit pu développer plus rapidement.

2. Puis, nous avons eu de la peine avec l'ordre de chargement des éléments des composants. Par exemple les données de sources exerterne (firebase ou API) se se chargent plus tard que la page en elle même ce qui provoquait des erreurs (variables null) nous avons solutionné ce problème à l'aide des promises.   

## Conclusion
## Améliorations possibles
Nous avons pu implémenter tous les objectifs principaux pour avoir une application fonctionnelle. Mais malheureusement, nous n'avons pas pu implémenter l'entièreté des secondaires. Au fil du projet, nous avons également pensé a quelques améliorations supplémentaires qui seraient intéressantes. Voici une liste non-exhaustives des améliorations qui seraient intéressantes à réaliser : 

- Evaluation résultats automatique 
- Ajout d'une page avec les détails du compte utilisateur.
- Ajout de la possibilité de parier sur d'autres championnat. 
- Ajout de catégories pour pouvoir ajouter d'autres sports. 
- ...

### Retour d'expérience
Dans l'ensemble, notre projet c'est plutôt bien déroulé tant sur le plan organisationnel au sein de notre groupe tant sur la partie de développement. Ce projet nous a été très bénéfique. Il nous a permis de consolider nos connaissances acquises par le passé en Javascript et nous faire découvrir VueJS que nous ne n'avions jamais utilisé auparavant. 


## Installation du projet
1. Clonage du projet git : ```git clone https://github.com/heg-web/projet-letsbet_christe_mondaini.git```
2. Installation des dépendances : ```npm install```
3. Démarrage du serveur de développement : ```npm run dev```

