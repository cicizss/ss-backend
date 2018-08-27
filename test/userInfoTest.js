const app = require('../app');
const agent = require('supertest').agent(app());

describe('userInfo', function () {
    var token = '';
    before(function (done) {
        agent.post('/userInfo/login')
            .send({
                user: 'chenlz',
                password: '123456'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done('登录失败');
                token = "Bearer " + res.body.result.token;
                done();
            });
    });

    it('register', function (done) {
        agent.post('/userInfo/register')
            .send({
                user: 'chenlz',
                password: '123456',
                phone: '15623078770'
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

