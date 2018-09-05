const promise = require('bluebird');
const {statusInfo} = require('error-status-helper');
const teamDirectModule = require('../modules/teamDirectModule');

module.exports = {

    queryTeam: (req, res, next) => {
        const query = req.query;
        return new promise((resolve, reject) => {
            const i= 3;
            return resolve([{
                key: i,
                richeid: `600001${i}`,
                name: `张三${i}号`,
                realname:`张三${i}号`,
                certifyNo: `42012344859500445${i}`,
                tel: `1378845162${i}`,
                sex: i % 2 ? '男' : '女',
                state: Math.floor(Math.random() * 10) % 3,
                bankcardid:`42012344859500445${i}`,
                bankcardname: `张三${i}号`,
                pwd:'',
                email:'123Qqq.com',
                remark:'这是一段描述',
                addtime: new Date(`2018-07-${Math.floor(i / 2) + 1}`),
            }])
        }).then(data => {
            res.sendData({list:data,pagination:{total:1,pageSize:10,current:1}});
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
            return teamDirectModule.createDirect(data);
        }).then(data => {
            res.sendData(data);
        }).catch(err => {
            next(err, req, res);
        });
    },

    directList: (req, res, next) => {
        const query = req.query;
        return new promise((resolve, reject) => {
            resolve(query);
        }).then(data => {
            return teamDirectModule.directList(data);
        }).then(data => {
            res.sendData(data);
        }).catch(err => {
            next(err, req, res);
        });
    }
}
