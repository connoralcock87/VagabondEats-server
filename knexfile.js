// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
     host: '127.0.0.1',
     user: 'root',
     password: 'password',
     database: 'foodTruck_db',
     charset: 'utf8'
    }
  },

  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
