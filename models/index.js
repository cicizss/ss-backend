const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appConfig = resolveApp('config.js');
const config = require(appConfig);

const MySqlSettings = config.MySqlSettings;
const sequelize = new Sequelize(MySqlSettings.database, MySqlSettings.username, MySqlSettings.password, {
    host: MySqlSettings.host,
    port: MySqlSettings.port,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

require('./person').bind(null, sequelize)();
require('./direct').bind(null, sequelize)();

sequelize.sync();

module.exports = sequelize;
