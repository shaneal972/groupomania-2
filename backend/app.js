const express = require('express');
const cors = require('cors');
const path = require('path');
const query = require('./utils/query.js');

// Création de l'application express
const app = express();

// Sécurisation attaque de brute force

// Sécurisation de quelques failles de sécurité


// Sécurisation de l'attaque brute-force

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const queryRoutes = require('./routes/query');

//Connection à la base de donnée Mysql


// Mes middleware
// app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true),
    next();
});


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/queries', queryRoutes);

module.exports = app;
