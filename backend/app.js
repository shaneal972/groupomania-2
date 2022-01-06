const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");

// Création de l'application express
const app = express();

// Configuration d'un limiter 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Chaque adresse IP est limitée à 100 requêtes par fenêtre.
});

// Sécurisation attaque de brute force
app.use(limiter);

// Sécurisation de quelques failles de sécurité
app.use(helmet());

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

// Mes middleware
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin, X-Requested-With, Accept, Content-Type, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Content-Type", "application/json");
    next();
});


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

module.exports = app;
