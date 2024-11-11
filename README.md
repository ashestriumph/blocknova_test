# Blocknova Test Project

Ce projet est une application Node.js intégrée avec MongoDB et une API Bitquery pour automatiser certaines tâches grâce à des cron jobs.

## Table des matières

- [Structure du Projet](#structure-du-projet)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Dépendances](#dépendances)
- [Scripts](#scripts)
- [Auteurs](#auteurs)

## Structure du Projet

Voici la structure des dossiers et fichiers principaux :

```
BLOCKNOVA-TEST/
├── config/ # Configuration de la base de données
│ └── db.js # Fichier de connexion à MongoDB
├── cron/ # Tâches automatisées (cron jobs)
│ └── fetchCron.js # Cron job pour récupérer des données via l'API
├── models/ # Modèles Mongoose pour MongoDB
│ └── Transaction.js # Modèle de transaction pour MongoDB
├── services/ # Services pour les intégrations externes
│ └── bitqueryService.js # Service d'intégration avec l'API Bitquery
├── .env # Fichier de configuration des variables d'environnement
├── .gitignore # Liste des fichiers et dossiers à ignorer par Git
├── index.js # Point d'entrée de l'application
├── package.json # Dépendances et scripts du projet
└── README.md # Documentation du projet

```

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/nom-utilisateur/blocknova-test.git
   cd blocknova-test
   ```

2. Installer les dépendance en faisant : `npm install`

3. Assurez-vous d'avoir MongoDB en cours d'exécution

## Configuration

1.  Créez un fichier .env à la racine du projet et configurez les variables d'environnement suivantes :

```
MONGO_URI=mongodb://localhost:27017/blocknova
BITQUERY_API_KEY=your_bitquery_api_key
```

2. Assurez-vous que l'URI de connexion MongoDB correspond à votre installation locale ou à votre configuration distante.

## utilisation

1.  Pour lancer le projet en mode développement avec nodemon : `npm run dev`

2.  Le script `startCronJob()` dans `fetchCron.js` s'exécute automatiquement et appelle l'API Bitquery selon l'intervalle de cron défini.

## Dépendances

- Express : Framework web pour gérer les routes et les requêtes.
- Mongoose : ODM pour MongoDB.
- Axios : Client HTTP pour interagir avec l'API Bitquery.
- dotenv : Module pour charger les variables d'environnement depuis un fichier .env.
- node-cron : Module pour gérer les tâches planifiées (cron jobs).
- nodemon : Outil de développement pour relancer automatiquement le serveur après chaque changement de fichier.

## Scripts

- `npm run dev` : Démarre l'application en mode développement avec nodemon.
- `npm start` : Démarre l'application en mode production.
