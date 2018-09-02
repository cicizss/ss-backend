const {DataTypes} = require('sequelize');
/**
 * 用户登陆日志表
 * @param sequelize
 */
const  user_admin_login_log = (sequelize) => {
    sequelize.define('user_admin_login_log',
        {
            id: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nickname: { //昵称
                type: DataTypes.STRING
            },
            email: { //邮箱
                type: DataTypes.STRING
            },
            login_time: { //登陆时间
                type: DataTypes.STRING
            },
            login_ip: { //登陆ip
                type: DataTypes.STRING
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true,
        }
    );
}

module.exports = user_admin_login_log;