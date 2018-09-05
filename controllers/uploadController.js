
const fs = require('fs');
const multiparty = require('multiparty');
const promise = require('bluebird');
const {statusInfo} = require('error-status-helper');

module.exports = {

    plan: function (req, res, next) {
        var form = new multiparty.Form({uploadDir: __dirname + '/../public/plan'});
        form.parse(req, function (err, fields, files) {
            // var _deviceid = parseInt(fields.deviceid[0]);
            var _filename = files.file[0].originalFilename;
            // var _md5 = fields.md5[0];
            // var _type = parseInt(fields.type[0]);
            // var _mark = fields.mark[0];
            fs.rename(files.file[0].path, __dirname + '/../public/plan/' + _filename, function (err, data) {
                res.sendData('ok');
            });
        });
    }
}