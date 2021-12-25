const models = require('../models/index');

// exports.getNameOfUserById = async (idUser) => {
//     const user = await models.User.findOne({
//         where: {
//             id: idUser
//         }
//     });
//     return user;
// };

exports.getPostTitle = async (req, res) => {
    const post = await models.Post.findOne({
        where: {
            id: req.body.idPost
        }
    });
    res.send({ title: post.title });
}
