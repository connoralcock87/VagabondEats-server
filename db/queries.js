const knex = require('./knex'); //connection

module.exports = {
  getAll() {
    return knex('*').from('truck');
  },

  getSchedule() {
    return knex('truck_location').from('truck_location')
      .select('truck.name as name',
      'truck_location.day as day', 'truck_location.startTime as startTime', 'truck_location.endTime as endTime', 'location.coordinates as coordinates', 'location.address as address')
      .join('truck', 'truck.id', 'truck_location.truck_id')
      .join('location', 'location.id', 'truck_location.location_id')
  }
};
