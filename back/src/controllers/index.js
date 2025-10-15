const { response } = require("../server");

const userController = (req, res) => {                                   
    res.status(200).send("Estamos recibiendo una solicitud para obtener datos de usuario");
};

const postController = (req, res) => {                                   
    res.status(200).send("Estamos enviando informacion de post");
};

module.exports = {
    userController,
    postController,
}
