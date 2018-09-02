const {DataTypes} = require('sequelize');
/**
 * 资源库类型
 * @param sequelize
 */
const  sol_resource_file = (sequelize) => {
    sequelize.define('sol_resource_file',
        {
            fileid: { //资源ID
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            resid: { //资源类型ID
                type: DataTypes.INTEGER
            },
            filename: { //PDF文件
                type: DataTypes.STRING
            },
            filepath: { //文件路径
                type: DataTypes.STRING
            },
            sort: { //排序
                type: DataTypes.INTEGER
            },
            author: { //操作人
                type: DataTypes.STRING
            },
            addtime: { //添加时间
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

module.exports = sol_resource_file;