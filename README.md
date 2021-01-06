# Bienvenue sur mon portfolio

Vous trouverez ici quelques petites consignes pour utiliser le projet en local et quelques informations sur la réaslisation de ce projet.

## Télécharger le dépôt en local
Pour télécharger le projet il suffit de télécharger le .zip ou en faisant un `git clone https://github.com/ImadEM21/portfolio.git`
depuis votre terminal.

## Lancer le projet
###### Prérequis
Avoir Node.js et npm déjà installés sur votre machine ainsi que MongoDB.

###### Instructions
Le projet se constitue en deux dossier principaux, le backend et le frontend. 
Le backend c'est le dossier racine et le frontend c'est le dossier `client`.
Une fois que le dépôt est cloné suivez ces étapes pour mettre en route le backend:
```
cd portfolio
npm install -g nodemon
npm install
nodemon server
```
A noter que la commande `npm install -g nodemon` n'est pas nécessaire si nodemon est déjà installé globalement sur votre machine.
Le backend va alors tourner sur le port 3000 de votre machine, il sera désormais disponible sur http://localhost:3000/api.

Ensuite il faudra installer le frontend en suivant ces commandes en supposant que vous vous trouvez dans le dossier portfolio:
```
cd client
npm install
npm run start
```
Le frontend va alors tourner sur le port 8000 de votre machine, vous pouvez désormais accèder à l'application en allant sur http://localhost:8000
Si jamais vous souhaitez changer le port du frontend vous pouvez le modifier dans le fichier `portfolio/client/package.json` dans la partie "scripts" 
et dans "start" il faudra modifier la valeur 8000 par le port que vous souhaitez.

**IMPORTANT**
N'oubliez pas de créer un fichier `.env` dans le dossier portfolio en y déclarant la variable `TOKEN`et lui attribuer une valeur. 
En effet, pour des questions de sécurité on déclare la valeur du token d'authentification dans un fichier `.env`.

Et voilà l'application devrait tourner correctement sur votre machine !



###### Histoire du projet
J'ai décidé de faire ce projet afin de mettre en avant mes projets réalisés sur mon propre site portfolio, mais également pour pouvoir faire un projet de plus, 
pratiquer avec ReactJS pour monter en compétences et par plaisir également.

###### Langages
- JavaScript (beacoup de JavaScript même)
- HTML
- CSS
- Bootstrap
- ReactJS
- NodeJS
- Express
- MongoDB
