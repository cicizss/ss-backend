const promise = require('bluebird');
const {statusInfo} = require('error-status-helper');
const userInfoModule = require('../modules/userInfoModule');

module.exports = {

    /**
     * 用户注册
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<TResult>}
     */
    register: (req, res, next) => {
        const body = req.body;
        return new promise((resolve, reject) => {
            if (body.user && body.password && body.phone) {
                return resolve(body);
            }
            else {
                return reject(statusInfo.Parameter_Error);
            }
        }).then(data => {
            return userInfoModule.checkUserHasRegistered(body);
        }).then(data => {
            return userInfoModule.checkPhoneHasRegistered(body);
        }).then(data => {
            return userInfoModule.register(body);
        }).then(data => {
            res.sendData(data);
        }).catch(err => {
            next(err, req, res);
        });
    },

    /**
     * 用户登录
     * @param req
     * @param res
     * @param next
     * @returns {Promise.<TResult>}
     */
    login: (req, res, next) => {
        const body = req.body;
        return new promise((resolve, reject) => {
            if (body.user && body.password) {
                return resolve(body);
            }
            else {
                return reject(statusInfo.Parameter_Error);
            }
        }).then(data => {
            return userInfoModule.login(data);
        }).then(data => {
            if (data)
                res.sendData({token: data});
            else
                throw statusInfo.User_Or_Password_Error;
        }).catch(err => {
            next(err, req, res);
        });
    }
}
