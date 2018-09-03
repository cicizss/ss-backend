const {DataTypes} = require('sequelize');

/**
 * 自然人基本信息
 */
const  person = (sequelize) => {
    sequelize.define('person',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            realName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            sex:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            certifyNo: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            tel: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            bankCardNo :{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
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

module.exports = person;