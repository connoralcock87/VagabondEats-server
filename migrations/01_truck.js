
exports.up = function(knex, Promise) {
  return knex.schema.createTable('truck', (table) => {
    table.increments();
    table.text('name');
    table.text('foodType');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('truck');
};
