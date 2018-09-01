const router= require('express').Router();
const userRouter = require('./userRouter');
const teamRouter = require('./teamRouter');

module.exports = () => {

    router.use('/user', userRouter()); //用户（登录用户）

    router.use('/team', teamRouter()); //团队

    return router;
};
