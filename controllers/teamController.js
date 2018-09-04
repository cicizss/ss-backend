const promise = require('bluebird');
const {statusInfo} = require('error-status-helper');
// const userInfoModule = require('../modules/userInfoModule');
const orm = require('../models');

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

    createDirect: (req, res, next) => {
        const body = req.body;
        return new promise((resolve, reject) => {
            if (body) {
                return resolve(body);
            }
            else {
                return reject(statusInfo.Parameter_Error);
            }
        }).then(data => {
            return friendModule.addFriend(data);
        }).then(data => {
            res.sendData(data);
        }).catch(err => {
            next(err, req, res);
        });
    }
}
