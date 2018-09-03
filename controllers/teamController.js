const promise = require('bluebird');
const {statusInfo} = require('error-status-helper');
// const userInfoModule = require('../modules/userInfoModule');
const  orm = require('../models');

module.exports = {

    queryTeam: (req, res, next) => {
        const query = req.query;
        return new promise((resolve, reject) => {
            return resolve([])
        }).then(data => {
            res.sendData(data);
        }).catch(err => {
            next(err, req, res);
        });
    },

}
