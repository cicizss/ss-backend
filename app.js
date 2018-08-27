const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const statusHelper = require('error-status-helper');
const config = require('./config');
const routes = require('./routes');

statusHelper(express);

const App = () => {
    const app = express();

    // server listen port
    app.set('port', process.env.PORT || config.ServerPort);

    app.use(cors());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(routes());

    // catch 404 and forward to error handler
    app.use(statusHelper.notFoundMiddleware);

    // error handler
    app.use(statusHelper.errorMiddleware);

    return app;
};

const startServer = () => {
    const app = App();
    app.listen(app.get('port'), function () {
        console.info(require(path.resolve(__dirname, 'package.json')).name + ' server listening on port ' + app.get('port'));
    });
    return app;
};

if (require.main === module) {
    startServer();
}
else {
    module.exports = startServer;
}

