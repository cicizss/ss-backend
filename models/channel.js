const {DataTypes} = require('sequelize');

/**
 * 渠道
 */
const  channel = (sequelize) => {
    sequelize.define('channel',
        {
            id: { //career_id 标识
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            company : { //公司名称
                type: DataTypes.STRING,
                allowNull: false
            },
            contacts : { //联系人
                type: DataTypes.STRING,
                allowNull: false
            },
            tel: { //电话
                type: DataTypes.STRING,
                allowNull: false
            },
            signCompany:{ //签约公司
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false
            },
            bankCardNo :{ //银行卡号
                type: DataTypes.STRING,
                allowNull: false
            }
            servicePerson :{ //归口服务人
                type: DataTypes.STRING,
                allowNull: false
            },
            serviceFee :{ //服务人佣金
                type: DataTypes.STRING,
                allowNull: false
            },
            payFile :{ //佣金支出文件
                type: DataTypes.ARRAY(DataTypes.STRING),
                defaultValue: []
            },
            accumulative: { //累计完成标保，？？？
                type: DataTypes.STRING
            },
            description :{ //备注
                type: DataTypes.STRING
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

module.exports = channel;