const {DataTypes} = require('sequelize');
/**
 * 财富团队成员级别关系
 * @param sequelize
 */
const  sol_richegroup = (sequelize) => {
    sequelize.define('sol_richegroup',
        {
            id: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            cid: { //子ID
                type: DataTypes.INTEGER
            },
            pid: { //父ID
                type: DataTypes.INTEGER
            },
            addtime: { //邀请添加时间
                type: DataTypes.TIMESTAMP
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        }
    );
}

module.exports = sol_richegroup;