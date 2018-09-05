const router= require('express').Router();
const uploadController = require('../controllers/uploadController');

module.exports = () => {

    router.route('/plan')
        .post(uploadController.plan);

    return router;
};