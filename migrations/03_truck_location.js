
exports.up = function(knex, Promise) {
  return knex.schema.createTable('truck_location', (table) => {
    table.increments();
    table.integer('truck_id').references('truck.id').unsigned().onDelete('cascade');
    table.integer('location_id').references('location.id').unsigned().onDelete('cascade');
    table.text('day');
    table.time('startTime');
    table.time('endTime');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('truck_location')
};
