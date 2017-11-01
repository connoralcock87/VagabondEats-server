
exports.seed = function(knex, Promise) {

  return knex('truck_location').del().then(function () {
		return knex.raw('ALTER TABLE ' + 'truck_location' + ' AUTO_INCREMENT = 1').then(function() {

    var truckLocations = [{
      id: 1,
      truck_id: 1,
      location_id: 1,
      day: 'Monday',
      startTime: '16:00:00',
      endTime: '21:00:00'
    }, {
      id: 2,
      truck_id: 2,
      location_id: 1,
      day: 'Tuesday',
      startTime: '16:00:00',
      endTime: '21:00:00'
    }, {
      id: 3,
      truck_id: 3,
      location_id: 1,
      day: 'Wednesday',
      startTime: '16:00:00',
      endTime: '21:00:00'
    }, {
      id: 4,
      truck_id: 4,
      location_id: 1,
      day: 'Thursday',
      startTime: '16:00:00',
      endTime: '21:00:00'
    }, {
      id: 5,
      truck_id: 5,
      location_id: 1,
      day: 'Friday',
      startTime: '16:00:00',
      endTime: '21:00:00'
    }, {
      id: 6,
      truck_id: 6,
      location_id: 1,
      day: 'Saturday',
      startTime: '13:00:00',
      endTime: '21:00:00'
    }, {
      id: 7,
      truck_id: 7,
      location_id: 1,
      day: 'Sunday',
      startTime: '13:00:00',
      endTime: '20:00:00'
    }, {
      id: 8,
      truck_id: 8,
      location_id: 2,
      day: 'Monday',
      startTime: '12:00:00',
      endTime: '21:00:00'
    }, {
      id: 9,
      truck_id: 9,
      location_id: 2,
      day: 'Tuesday',
      startTime: '12:00:00',
      endTime: '21:00:00'
    }, {
      id: 10,
      truck_id: 10,
      location_id: 2,
      day: 'Wednesday',
      startTime: '12:00:00',
      endTime: '21:00:00'
    }, {
      id: 11,
      truck_id: 11,
      location_id: 2,
      day: 'Thursday',
      startTime: '11:00:00',
      endTime: '15:00:00'
    }, {
      id: 12,
      truck_id: 6,
      location_id: 2,
      day: 'Thursday',
      startTime: '15:00:01',
      endTime: '21:00:00'
    }, {
      id: 13,
      truck_id: 12,
      location_id: 2,
      day: 'Friday',
      startTime: '12:00:00',
      endTime: '21:00:00'
    }, {
      id: 14,
      truck_id: 13,
      location_id: 2,
      day: 'Saturday',
      startTime: '12:00:00',
      endTime: '21:00:00'
    }, {
      id: 15,
      truck_id: 14,
      location_id: 2,
      day: 'Sunday',
      startTime: '12:00:00',
      endTime: '20:00:00'
    }, {
      id: 16,
      truck_id: 15,
      location_id: 3,
      day: 'Thursday',
      startTime: '17:00:00',
      endTime: '22:30:00'
    }, {
      id: 17,
      truck_id: 15,
      location_id: 3,
      day: 'Friday',
      startTime: '17:00:00',
      endTime: '22:30:00'
    }, {
      id: 18,
      truck_id: 15,
      location_id: 3,
      day: 'Saturday',
      startTime: '14:00:00',
      endTime: '22:30:00'
    }, {
      id: 19,
      truck_id: 15,
      location_id: 3,
      day: 'Sunday',
      startTime: '14:00:00',
      endTime: '21:00:00'
    }, {
      id: 20,
      truck_id: 16,
      location_id: 3,
      day: 'Wednesday',
      startTime: '17:00:00',
      endTime: '22:00:00'
    }, {
      id: 21,
      truck_id: 16,
      location_id: 3,
      day: 'Thursday',
      startTime: '17:00:00',
      endTime: '22:00:00'
    }, {
      id: 22,
      truck_id: 16,
      location_id: 3,
      day: 'Friday',
      startTime: '17:00:00',
      endTime: '22:00:00'
    }, {
      id: 23,
      truck_id: 16,
      location_id: 3,
      day: 'Saturday',
      startTime: '17:00:00',
      endTime: '22:00:00'
    }, {
      id: 24,
      truck_id: 17,
      location_id: 3,
      day: 'Wednesday',
      startTime: '17:00:00',
      endTime: '23:00:00'
    }, {
      id: 25,
      truck_id: 17,
      location_id: 3,
      day: 'Thursday',
      startTime: '17:00:00',
      endTime: '23:00:00'
    }, {
      id: 26,
      truck_id: 17,
      location_id: 3,
      day: 'Friday',
      startTime: '14:00:00',
      endTime: '23:00:00'
    }, {
      id: 27,
      truck_id: 17,
      location_id: 3,
      day: 'Saturday',
      startTime: '14:00:00',
      endTime: '23:30:00'
    }, {
      id: 28,
      truck_id: 17,
      location_id: 3,
      day: 'Sunday',
      startTime: '17:00:00',
      endTime: '21:00:00'
    }, {
      id: 29,
      truck_id: 18,
      location_id: 4,
      day: 'Monday',
      startTime: '07:00:00',
      endTime: '18:00:00'
    }, {
      id: 30,
      truck_id: 18,
      location_id: 4,
      day: 'Tuesday',
      startTime: '07:00:00',
      endTime: '18:00:00'
    }, {
      id: 31,
      truck_id: 18,
      location_id: 4,
      day: 'Wednesday',
      startTime: '07:00:00',
      endTime: '18:00:00'
    }, {
      id: 32,
      truck_id: 18,
      location_id: 4,
      day: 'Thursday',
      startTime: '07:00:00',
      endTime: '18:00:00'
    }, {
      id: 33,
      truck_id: 18,
      location_id: 4,
      day: 'Friday',
      startTime: '07:00:00',
      endTime: '18:00:00'
    }, {
      id: 34,
      truck_id: 18,
      location_id: 4,
      day: 'Saturday',
      startTime: '09:00:00',
      endTime: '15:00:00'
    }, {
      id: 35,
      truck_id: 18,
      location_id: 4,
      day: 'Sunday',
      startTime: '09:00:00',
      endTime: '15:00:00'
    }, {
      id: 36,
      truck_id: 19,
      location_id: 5,
      day: 'Monday',
      startTime: '14:00:00',
      endTime: '22:00:00'
    }, {
      id: 37,
      truck_id: 19,
      location_id: 5,
      day: 'Tuesday',
      startTime: '14:00:00',
      endTime: '22:00:00'
    }, {
      id: 38,
      truck_id: 19,
      location_id: 5,
      day: 'Thursday',
      startTime: '14:00:00',
      endTime: '22:00:00'
    }, {
      id: 39,
      truck_id: 19,
      location_id: 5,
      day: 'Friday',
      startTime: '14:00:00',
      endTime: '23:00:00'
    }, {
      id: 40,
      truck_id: 19,
      location_id: 5,
      day: 'Saturday',
      startTime: '14:00:00',
      endTime: '23:00:00'
    }, {
      id: 41,
      truck_id: 19,
      location_id: 5,
      day: 'Sunday',
      startTime: '10:00:00',
      endTime: '22:00:00'
    }, {
      id: 42,
      truck_id: 20,
      location_id: 6,
      day: 'Tuesday',
      startTime: '11:00:00',
      endTime: '15:00:00'
    }, {
      id: 43,
      truck_id: 20,
      location_id: 6,
      day: 'Wednesday',
      startTime: '11:00:00',
      endTime: '15:00:00'
    }, {
      id: 44,
      truck_id: 20,
      location_id: 6,
      day: 'Thursday',
      startTime: '11:00:00',
      endTime: '15:00:00'
    }, {
      id: 45,
      truck_id: 20,
      location_id: 6,
      day: 'Friday',
      startTime: '11:00:00',
      endTime: '15:00:00'
    }, {
      id: 46,
      truck_id: 10,
      location_id: 7,
      day: 'Tuesday',
      startTime: '16:00:00',
      endTime: '21:00:00'
    }, {
      id: 47,
      truck_id: 21,
      location_id: 7,
      day: 'Wednesday',
      startTime: '16:00:00',
      endTime: '21:00:00'
    }, {
      id: 48,
      truck_id: 22,
      location_id: 7,
      day: 'Saturday',
      startTime: '14:00:00',
      endTime: '21:00:00'
    }, {
      id: 49,
      truck_id: 23,
      location_id: 8,
      day: 'Monday',
      startTime: '12:00:00',
      endTime: '22:00:00'
    }, {
      id: 50,
      truck_id: 24,
      location_id: 8,
      day: 'Tuesday',
      startTime: '12:00:00',
      endTime: '22:00:00'
    }, {
      id: 51,
      truck_id: 25,
      location_id: 8,
      day: 'Wednesday',
      startTime: '12:00:00',
      endTime: '22:00:00'
    }, {
      id: 52,
      truck_id: 26,
      location_id: 8,
      day: 'Thursday',
      startTime: '12:00:00',
      endTime: '22:00:00'
    }, {
      id: 53,
      truck_id: 27,
      location_id: 8,
      day: 'Friday',
      startTime: '12:00:00',
      endTime: '22:00:00'
    }, {
      id: 54,
      truck_id: 28,
      location_id: 8,
      day: 'Saturday',
      startTime: '12:00:00',
      endTime: '22:00:00'
    }, {
      id: 55,
      truck_id: 29,
      location_id: 8,
      day: 'Sunday',
      startTime: '12:00:00',
      endTime: '22:00:00'
    }, {
      id: 56,
      truck_id: 30,
      location_id: 9,
      day: 'Saturday',
      startTime: '16:00:00',
      endTime: '22:00:00'
    }, {
      id: 57,
      truck_id: 30,
      location_id: 10,
      day: 'Sunday',
      startTime: '16:00:00',
      endTime: '22:00:00'
    }];

    return knex('truck_location').insert(truckLocations);
  });
  });
};
