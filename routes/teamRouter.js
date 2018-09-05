const router= require('express').Router();
const teamController = require('../controllers/teamController');

module.exports = () => {

    router.route('/queryTeam')
        .get(teamController.queryTeam);


    router.route('/directList')
        .get(teamController.directList);

    router.route('/createDirect')
        .post(teamController.createDirect);
    //
    // router.route('/editDirect')

    return router;
};