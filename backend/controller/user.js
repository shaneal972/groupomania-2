const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../models');

// const db = require('../models');

// const User = sequelize.users;
const User = require('../models').User;


exports.signup = async (req, res, next) => {
    console.log('body', req.body);
    //Hashage du mot de passe
    const hash = await bcrypt.hash(req.body.password, 10);
    console.log('hash', hash);
    let infoUser = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        connected: req.body.connected,
    };
    console.log('utilisateur', infoUser);
    const user = await User.create(infoUser);
    res.status(200).send(user);
    console.log('id', user.id);
}

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            {id: user.id},
                            {email: user.email},
                            {expiresIn: '24h'}
                        )
                    });
                })
        })
        .catch(error => res.status(500).json({error}))  
}