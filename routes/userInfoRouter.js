const router= require('express').Router();
const userInfoController = require('../controllers/userInfoController');

module.exports = () => {

    router.route('/register')
        .post(userInfoController.register);

    router.route('/login')
        .post(userInfoController.login);

    return router;
};
