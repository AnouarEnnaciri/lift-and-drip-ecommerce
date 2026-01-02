Lift & Drip — Application E-commerce MERN

Lift & Drip est une application e-commerce full-stack développée avec le stack MERN (MongoDB, Express, React, Node.js).
Le projet a été conçu pour reproduire le fonctionnement réel d’une application web moderne, depuis la conception de l’API jusqu’au déploiement en production.

Il s’agit de mon premier projet e-commerce complet, avec un accent mis sur la séparation frontend/backend, la gestion des données, l’authentification et les contraintes réelles rencontrées lors du déploiement.

Démo en ligne
Frontend : [https://TON-FRONTEND.vercel.app](https://lift-and-drip-ecommerce-l52u.vercel.app/)

Backend API : [https://TON-BACKEND.vercel.app](https://lift-and-drip-ecommerce.vercel.app/ )

Fonctionnalités

L’application permet aux utilisateurs de parcourir les produits par catégorie, consulter les pages de détail, gérer un panier, s’authentifier via JWT, passer commande et consulter l’historique de leurs commandes.

Un espace administrateur est également disponible. Il permet la gestion des produits, des commandes et des utilisateurs via un tableau de bord sécurisé.

Technologies utilisées

Le frontend est développé avec React (Vite) et Tailwind CSS. La gestion de l’état global est assurée par Redux Toolkit et les appels API sont réalisés via Axios.

Le backend repose sur Node.js et Express.js. La base de données est gérée avec MongoDB et Mongoose. L’authentification est implémentée à l’aide de JSON Web Tokens.

Les images produits sont stockées sur Cloudinary. Le système de paiement utilise PayPal. Le frontend et le backend sont déployés séparément sur Vercel.

Architecture du projet

L’architecture repose sur une séparation claire entre le frontend et le backend.
La communication se fait exclusivement via une API REST.
Les variables sensibles sont gérées à l’aide de variables d’environnement.
Le stockage des fichiers est externalisé afin d’éviter toute dépendance au système de fichiers du serveur.

Variables d’environnement

Les fichiers .env ne sont pas inclus dans le dépôt pour des raisons de sécurité.

Backend (.env)

PORT=9000
MONGO_URL=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
FRONTEND_URL=


Frontend (.env)

VITE_API_URL=
VITE_PAYPAL_CLIENT_ID=


Un fichier .env.example est fourni afin d’indiquer les variables nécessaires au bon fonctionnement du projet.

Exécution en local

Pour lancer le backend en local, il suffit d’installer les dépendances puis de démarrer le serveur de développement.

cd backend
npm install
npm run dev


Pour lancer le frontend en local, les étapes sont similaires.

cd frontend
npm install
npm run dev

Remarques

Ce projet m’a permis de me confronter à des problématiques concrètes du développement full-stack, notamment la gestion du CORS, la configuration des environnements, les erreurs liées au déploiement et la communication frontend/backend en production.

L’objectif principal était de construire une base solide et fonctionnelle, avec une approche réaliste proche de ce qui est attendu dans un contexte professionnel.

Auteur

Anouar
Développeur Full-Stack MERN
