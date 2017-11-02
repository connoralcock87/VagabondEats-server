
exports.seed = function(knex, Promise) {

  return knex('location').del().then(function () {
		return knex.raw('ALTER TABLE ' + 'location' + ' AUTO_INCREMENT = 1').then(function() {

    var locations = [{
      id: 1,
      coordinates: '39.7695837, -104.90597969999999',
      name: 'Station 26 Brewing',
      address: '7045 E 38th Ave'
    }, {
      id: 2,
      coordinates: '39.758234, -105.00736970000003',
      name: 'Denver Beer Company',
      address: "1695 Platte St"
    }, {
      id: 3,
      coordinates: '39.7619403, -104.98147489999997',
      name: 'Finn\'s Manor',
      address: '2927 Larimer St'
    }, {
      id: 4,
      coordinates: '39.7622321, -105.01351339999997',
      name: 'The Juicing Tree',
      address: '2927 W 32nd Ave'
    }, {
      id: 5,
      coordinates: '39.77662979999999, -105.02526710000001',
      name: 'El Pastorcito 2',
      address: '44th and Federal'
    }, {
      id: 6,
      coordinates: '39.74580100000001, -104.990744',
      name: 'Yatai',
      address: '17th and California'
    }, {
      id: 7,
      coordinates: '39.747316, -105.02434499999998',
      name: 'Little Machine Beer',
      address: '2924 W 20th Ave'
    }, {
      id: 8,
      coordinates: '39.67976549999999, -104.99078229999998',
      name: 'Declaration Brewing',
      address: '2030 S Cherokee St'
    }, {
      id: 9,
      coordinates: '39.7631728, -104.9813241',
      name: 'Epic Brewing Company',
      address: '3001 Walnut St'
    }, {
      id: 10,
      coordinates: '39.7615077, -104.9810761',
      name: 'Ratio Beerworks',
      address: '2920 Larimer St'
    }, {
      id: 11,
      coordinates: '39.77035629999999, -105.0033014',
      name: 'Diebolt Brewing Company',
      address: '3855 Mariposa St'
    }];

    return knex('location').insert(locations);
  });
  });
};
