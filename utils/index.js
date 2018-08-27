const msgType = require('./msgType');
const msgTemplate = require('./msgTemplate');

String.prototype.formatParam = function () {
    const args = arguments;
    return this.replace(/\{(\d+)\}/gm,
        function (m, i) {
            return args[i];
        });
};

module.exports = {
    msgTemplate: msgTemplate,
    msgType: msgType
};
