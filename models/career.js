const {DataTypes} = require('sequelize');

/**
 * 事业合伙人，包括财富团队成员
 */
const  career = (sequelize) => {
    sequelize.define('career',
        {
            id: { //career_id 标识
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            adviserNo : { //顾问id
                type: DataTypes.STRING,
                allowNull: false
            },
            leader : { //上级，事业合伙人，此处为direct_id，财富团队成员为career_id
                type: DataTypes.STRING,
                allowNull: false
            },
            isCareer: { //是否是事业合伙人，y:leader为direct员工，n:财富团队成员
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            grade: { //级别，isCareer ？ 事业合伙人 ： 财富总监等等
                type: DataTypes.STRING,
                allowNull: false
            },
            policies:{ //poliy 保单号，数组
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false
            },
            signTime: { //签约时间
                type: DataTypes.TIMESTAMP,
                allowNull: false,
            },
            isAchieve :{ //是否达到展业条件 //TODO:可能会更改
                type: DataTypes.BOOLEAN
            },
            description :{ //备注
                type: DataTypes.STRING
            },
            personId :{ //关联到个人信息
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: sequelize.model('person')
                }
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

module.exports = career;