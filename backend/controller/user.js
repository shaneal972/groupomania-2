const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

const models = require('../models/index');


/**
 * Permet de créer un compte à un utilisateur
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 */
exports.signup = async (req, res, next) => {
    //Hashage du mot de passe
    const hash = await bcrypt.hash(req.body.password, 10);
    let infoUser = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        roleId: 2
    };
    const user = await models.User.create(infoUser);
    res.status(200).json({
        user,
        message: 'Utilisateur crée avec succès !'
    });
}

/**
 * Permet de connecter un utilisateur
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 * @returns 
 */
exports.login = async (req, res, next) => {
    const email = req.body.email;
    if (email !== null || email !== '') {
        const user = await models.User.findOne({
            include: [
                {
                    model: models.Role,
                    attributes: ['libelle']
                }
            ],
            where: {
                email: {
                    [Op.eq]: email,
                }
            }
        });
        if (!user) {
            return res.status(401).send({
                error: 'Utilisateur non trouvé !'
            });
        }
        const valid = bcrypt.compareSync(req.body.password, user.password);
        if (!valid) {
            return res.status(401).send({
                accessToken: null,
                error: 'Mot de passe incorrect !'
            });
        }
        let token = jwt.sign(
            {id: user.id},
            process.env.TOKEN,
            {expiresIn: 86400});
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
            role: user.Role
        });
    } else {
        res.status(500).json("Une erreur inconnue est survenue !")
    }
}