const dbQuery = require('../utils/query');
const models = require('../models/index');

/**
 * Permet de récupérer tous les posts
 */
exports.getPosts = async (req, res, next) => {
    const posts = await models.Post.findAll({
        include: [
            {
                model: models.User,
                group: ['id']
                
            },
            {
                model: models.Comment,
                
            },
        ],
        order: [
            ['id', 'DESC'],
        ]
    });
    res.status(200).send({ posts });
};

/**
 * Permet de créer un post
 * @param {Request} req 
 * @param {Response} res 
 * @param {} next 
 */
exports.createPost = async (req, res, next) => {
    //Récupération des informations du post à créer
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.body.userId;

    //Insertion dans la base de donnée
    const id = await models.Post.create({ title, content, userId });
    if (!id) {
        res.send("Post n'a pas pu être crée !");
    } else {
        res.status(201).json("Post crée avec succès !");
    }
};

/**
 * Permet de récupérer un post en fonction de son id
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 */
exports.getOnePost = async (req, res, next) => {
    let id = null;
    // Récupération de l'id 
    if (req.query) {
        id = req.query.id;
    } else {
        id = req.body.id;
    }
    // Récupération du post dans la bdd
    const result = await models.Post.findAll({
        include: [
            {
                model: models.Comment,
                include: [{
                    model: models.User
                }]
            },
        ],
        where: {
            id: id
        },
        order: [
            [models.Comment, 'id', 'DESC'],
        ]
    });
    // Envoie au frontend
    if (!result) {
        res.status(400).json("Le post n'a pas été trouvé !");
    } else {
        const idUser = result[0].userId;
        const user = await dbQuery.getNameOfUserById(idUser);
        res.status(200).json({post: result[0], user: user});
    }
};

/**
 * Permet de modifier le post dont l'id est :id
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 */
exports.updatePost = async (req, res, next) => {
    // Récupération de l'id 
    const id = req.body.params.id;
    // Récupération des nouvelles informations du post
    const postToUpdate = {
        title: req.body.data.title,
        content: req.body.data.content
    }
    // Vérification que le post est dans la bdd, 
    const post = await models.Post.findAll({ where: { id: id } });
    if (!(post.length != 0)) {
        res.send('Ce post n\'est pas dans la bdd');
    } else {
        // Update du post si oui.
        try {
            const updatedPost = await models.Post.update(postToUpdate, { where: { id: id } });
            if (updatedPost) {
            res.status(200).send("Post mis à jour avec succès !");
        }
        } catch(error) {
            res.status(400).json({ error: error.message });
        }
    }

};

/**
 * Permet de supprimer le post dont l'id est :id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.deletePost = async (req, res, next) => {
    console.log(req);
    // Récupération de l'id et après destruction
    const id = Number(req.body.id);
    try {
        const postDelete = await models.Post.destroy({
            where: {
                id: id,
            }
        });
        console.log(postDelete);
        if (postDelete) {
            res.status(200).send("Post supprimé avec succès !");
        } else {
            res.status(404).send("Ce post n'existe pas dans la bdd")
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

/**
 * Permet de récupérer les posts d'un utilisateur donné
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getPostsUser = async (req, res, next) => {
    // Récupération de l'id de l'utilisateur
    const id = req.body.id;
    // Récupération des posts dans la bdd lié à cet utilisateur
    try {
        const posts = await models.Post.findAll({
            where: {
                userId: id
            }
        });
        if (posts.length > 0) {
            res.status(200).send(posts);
        } else {
            res.json("Cet utilisateur n'a pas encore écrit d'articles !")
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};