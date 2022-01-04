const models = require('../models/index');
const query = require('../utils/query');

/**
 * Permet de récupérer toutes les commentaires 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getComments = async (req, res, next) => {
    const comments = await models.Comment.findAll();
    console.log(comments);
    if (comments.length > 0) {
        return res.status(200).send(comments);
    } else {
        res.status(400).json("Pas de commentaires dans la bdd !")
    }
};

/**
 * Permet à un utilisateur connecté et donné(:id) de créer un commentaire pour sur un post donné (:id)
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 */
exports.createUserCommentPost = async (req, res, next) => {
    // Récupération de l'id utilisateur et de l'id du post
    console.log(req.body);
    const userId = req.body.userId;
    const postId = req.body.postId;
    // Récupération du message du commentaire
    const message = req.body.message;
    // Vérification des infos reç🇺s
    if (userId === null || postId === null || message === '') {
        res.send("Vous devez renseigner tous les champs !");
    }
    // Insertion dans la bdd
    const comment = await models.Comment.create({ message, userId, postId });
    if (!comment) {
        res.send("Le commentaire n'a pas pu être crée !");
    } else {
        res.status(201).json("Commentaire crée avec succès !");
    }
};

/**
 * Permet de récupérer les commentaires d'un post donné
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 */
exports.getCommentsPost = async (req, res, next) => {
    // Récupération de l'id du post
    const id = req.params.id;
    // Récupération des commentaires dans la bdd lié à ce post
    try {
        const comments = await models.Comment.findAll({
            where: {
                postId: id
            }
        });
        if (comments.length > 0) {
            res.status(200).send(comments);
        } else {
            res.json("Ce post ne possède aucun commentaire ! ")
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Permet de récupérer les commentaires d'un utilisateur donné
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getCommentsUser = async (req, res, next) => {
    // Récupération de l'id de l'utilisateur
    const id = req.body.id;
    // Récupération des commentaires dans la bdd lié à cet utilisateur
    try {
        const comments = await models.Comment.findAll({
            where: {
                userId: id
            }
        });
        if (comments.length > 0) {
            res.status(200).send(comments);
        } else {
            res.json({
                error: "Cet utilisateur n'a pas encore commenté de post !",
                count: comments.length
            });
            
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};