const config = {
    development: {
        ServerPort: 9000,
        MySqlSettings:{
            host:'47.106.176.205',
            port:'3306',
            database: 'solshire',
            username: 'sol_shire',
            password: '123456'
        }
    }
};

module.exports = config['development'];
