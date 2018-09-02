const promise = require('bluebird');
const {statusInfo} = require('error-status-helper');
// const userInfoModule = require('../modules/userInfoModule');

module.exports = {

    users: (req, res, next) => {
        return new promise((resolve, reject) => {
            return resolve([
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                },
            ])
        }).then(data => {
            res.sendData(data);
        }).catch(err => {
            next(err, req, res);
        });
    },

    currentUser: (req, res, next) => {
        return new promise((resolve, reject) => {
            return resolve({
                name: 'Serati Ma',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                userid: '00000001',
                notifyCount: 12,
            })
        }).then(data => {
            res.sendData(data);
        }).catch(err => {
            next(err, req, res);
        });
    }

}
