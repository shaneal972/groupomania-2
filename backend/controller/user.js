const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


exports.signup = (req, res, next) => {
    console.log('body', req.body);
    //Hashage du mot de passe
     bcrypt
    .hash(req.body.password, 10)
         .then((hash) => {
        console.log('hash', hash);
      User.create({
          email: req.body.email,
          firstname: req.body.firstname,
          lastname: req.body.name,
          password: hash,
        // roleId: 1,
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));

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