const {DataTypes} = require('sequelize');

/**
 * 直销团队
 */
const  direct = (sequelize) => {
    sequelize.define('direct',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            employeeNo : { //员工号
                type: DataTypes.STRING,
                allowNull: false
            },
            jobs:{ //职位
                type: DataTypes.STRING,
                allowNull: false
            },
            company: { //所属公司
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            autoIncrement: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true,
            timestamps: true
        }
    );
};

module.exports = direct;