const models = require('../models/index');


exports.getNameOfUserById = async (idUser) => {
    const user = await models.User.findOne({
        where: {
            id: idUser
        }
    });
    return user;
};

exports.getPostTitle = async (idPost) => {
    const result = await models.Post.findOne({
        where: {
            id: idPost
        }
    });
    return result.data.title;
}

exports.getCountCommentsPost = async (id) => {
    const comments = await models.Comment.count({
        col: 'idPost', 
        where: {
            idPost: id
        },
        raw: true
    })
}