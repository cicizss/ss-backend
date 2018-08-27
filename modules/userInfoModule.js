const md5 = require('md5');
const {statusInfo} = require('error-status-helper');
const  orm = require('../models');

class UserInfo {
    constructor() {
        this.userInfo = orm.model('userInfo');
    }

    /**
     * 检查是否用户名已注册
     * @param data
     * @returns {*}
     */
    checkUserHasRegistered(data) {
        const regInfo = {
            user: data.user
        };
        return this.userInfo.findOne({where: regInfo})
            .then(data => {
                if (data)
                    throw statusInfo.User_Has_Registered;
                else
                    return;
            });
    }

    /**
     * 检查手机是否已注册
     * @param data
     * @returns {*}
     */
    checkPhoneHasRegistered(data) {
        const regInfo = {
            phone: data.phone,
            user: {[orm.Op.ne]: data.phone}
        };
        return this.userInfo.findOne({where: regInfo})
            .then(data => {
                if (data)
                    throw statusInfo.Phone_Has_Registered;
                else
                    return;
            });
    }

    /**
     * 账号注册
     * @param data
     * @returns {userInfo}
     */
    register(data, operator = 'create') {
        const userInfo = {
            user: data.user,
            password: md5(data.password),
            phone: data.phone
        };
        return this.userInfo.create(userInfo);
    }

    /**
     * 用户登录
     * @param data
     * @returns {Promise.<TResult>}
     */
    login(data) {
        const userInfo = {
            user: data.user,
            password: md5(data.password),
        };
        return this.userInfo.findOne({where: userInfo})
            .then(data => {
                if (data)
                    return 'token';
                else
                    return null;
            });
    }
}

module.exports =  new UserInfo();
