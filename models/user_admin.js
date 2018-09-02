const {DataTypes} = require('sequelize');
/**
 * 用户表----所有可登陆的用户
 * @param sequelize
 */
const  user_admin = (sequelize) => {
    sequelize.define('user_admin',
        {
            id: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nickname: { //昵称
                type: DataTypes.STRING
            },
            email: { //邮箱|登录帐号
                type: DataTypes.STRING
            },
            pswd: { //密码
                type: DataTypes.STRING
            },
            create_time: {  //注册时间
                type: DataTypes.DATE,
                defaultValue: Date.now()
            },
            last_login_time: { //上一次登陆时间
                type: DataTypes.STRING
            },
            last_login_ip: { //上一次的登陆ip
                type: DataTypes.STRING
            },
            status: { //1:有效，0:禁止登录
                type: DataTypes.INTEGER
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        }
    );
}

module.exports = user_admin;