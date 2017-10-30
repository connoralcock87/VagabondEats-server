const knex = require('./knex'); //connection

module.exports = {
  getAll: function () {
    return knex('*').from('truck');
  }
};
