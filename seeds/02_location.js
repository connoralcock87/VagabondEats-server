
exports.seed = function(knex, Promise) {

  return knex('location').del().then(function () {
		return knex.raw('ALTER TABLE ' + 'location' + ' AUTO_INCREMENT = 1').then(function() {

    var locations = [{
      id: 1,
      coordinates: '39.7695837, -104.90597969999999',
      name: 'Station 26 Brewing'
    }, {
      id: 2,
      coordinates: '39.758234, -105.00736970000003',
      name: 'Denver Beer Company'
    }, {
      id: 3,
      coordinates: '39.7619403, -104.98147489999997',
      name: 'Finn\'s Manor'
    }, {
      id: 4,
      coordinates: '39.7622321, -105.01351339999997',
      name: 'The Juicing Tree'
    }, {
      id: 5,
      coordinates: '39.77662979999999, -105.02526710000001',
      name: 'El Pastorcito 2'
    }, {
      id: 6,
      coordinates: '39.74580100000001, -104.990744',
      name: 'Yatai'
    }, {
      id: 7,
      coordinates: '39.747316,-105.02434499999998',
      name: 'Little Machine Beer'
    }, {
      id: 8,
      coordinates: '39.67976549999999,-104.99078229999998',
      name: 'Declaration Brewing'
    }, {
      id: 9,
      coordinates: '39.7631728,-104.9813241',
      name: 'Epic Brewing Company'
    }, {
      id: 10,
      coordinates: '39.7615077,-104.9810761',
      name: 'Ratio Beerworks'
    }];

    return knex('location').insert(locations);
  });
  });
};
