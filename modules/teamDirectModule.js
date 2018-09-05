const {statusInfo} = require('error-status-helper');
const orm = require('../models');

class teamDirectModule {

    constructor() {
        this.teamDirect = orm.model('direct');
        this.peson = orm.model('person');
    }

    createDirect(data) {
        const direct = {
            employeeNo: data.employeeNo,
            jobs: data.jobs,
            company: data.company,
            person: {
                realName: data.person.realName,
                sex: data.person.sex,
                certifyNo: data.person.certifyNo,
                tel: data.person.tel,
                bankCardNo: data.person.bankCardNo,
            }
        };
        return this.teamDirect.create(direct, {
            include: [{
                model: this.peson
            }]
        });
    }

    directList(data) {
        const {startTime, endTime} = data;
        const options = {};
        if(startTime && endTime) {
            return this.teamDirect.findAll({
                where: {
                    createdAt: {
                        $and: {
                            $gte: startTime,
                            $lte: endTime
                        }
                    }
                }
            });
        }

    }
}

module.exports = new teamDirectModule();