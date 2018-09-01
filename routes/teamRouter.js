const router= require('express').Router();
const teamController = require('../controllers/teamController');

module.exports = () => {

    router.route('/queryTeam')
        .get(teamController.queryTeam);

    return router;
};