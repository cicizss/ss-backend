const {DataTypes} = require('sequelize');

/**
 * 自然人基本信息
 */
const  person = (sequelize) => {
    sequelize.define('person',
        {
            id: { //用户ID
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            realName: { //真实姓名
                type: DataTypes.STRING,
                allowNull: false
            },
            sex:{ //性别
                type: DataTypes.INTEGER,
                allowNull: false
            },
            certifyNo: { //身份证号
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            tel: { //电话
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            bankCardNo :{ //银行卡号
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