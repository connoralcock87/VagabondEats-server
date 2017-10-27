
exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', (table) => {
    table.increments();
    table.text('coordinates');
    table.text('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('location')
};
