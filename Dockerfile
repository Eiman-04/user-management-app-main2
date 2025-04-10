# Utiliser l'image de base de Node.js
FROM node:16

# Créer un répertoire de travail pour l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier tous les fichiers du projet dans le répertoire de travail
COPY . .

# Exposer le port que ton application utilise
EXPOSE 3001

# Commande pour démarrer le serveur
CMD ["npm", "start"]
