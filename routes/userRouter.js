const router= require('express').Router();
const userController = require('../controllers/userController');

module.exports = () => {

    router.route('/users')
        .get(userController.users);

    router.route('/currentUser')
        .get(userController.currentUser);

    return router;
};