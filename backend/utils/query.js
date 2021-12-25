const models = require('../models/index');


exports.getNameOfUserById = async (idUser) => {
    const user = await models.User.findOne({
        where: {
            id: idUser
        }
    });
    return user;
}