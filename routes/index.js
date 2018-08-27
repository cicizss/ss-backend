const router= require('express').Router();
const userInfoRouter = require('./userInfoRouter');

module.exports = () => {

    router.use('/userInfo', userInfoRouter());

    return router;
};
