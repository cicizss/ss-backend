const {DataTypes} = require('sequelize');

const  userInfo = (sequelize) => {
    sequelize.define('userInfo',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            user: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            nickName: {
                type: DataTypes.STRING,
                allowNull: true
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
}

module.exports = userInfo;