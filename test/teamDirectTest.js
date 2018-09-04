const app = require('../app');
const agent = require('supertest').agent(app());

describe('teamDirect', function () {

    it('direct create', function (done) {
        agent.post('/team/createDirect')
            .send({
                employeeNo: '60001',
                jobs: 'ceo',
                company: 'yonyou',
                person:{
                    realName: '陈礼赞',
                    sex:1,
                    certifyNo: '4201982342',
                    tel: '1562307877',
                    bankCardNo: '62212345678',
                }
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('login', function (done) {
        agent.post('/userInfo/login')
            .send({
                user: 'chenlz',
                password: '123456'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('logout', function (done) {
        agent.post('/userInfo/logout')
            .set({'Authorization': token, 'Content-Type': 'application/json'})
            .send({})
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('resetPassword', function (done) {
        agent.post('/userInfo/resetPassword')
            .send({
                user: 'chenlz',
                password: '123456',
                verifyCode:'111111'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

});

