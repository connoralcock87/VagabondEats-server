
exports.seed = function(knex, Promise) {

  return knex('truck').del().then(function () {
  		return knex.raw('ALTER TABLE ' + 'truck' + ' AUTO_INCREMENT = 1').then(function() {

    var trucks = [{
      id: 1,
      name: 'Tacos el Huequito',
      foodType: 'Tacos'
    }, {
      id: 2,
      name: 'Roaming Bull Brasserie',
      foodType: 'European'
    }, {
      id: 3,
      name: 'King of Wings',
      foodType: 'Wings'
    }, {
      id: 4,
      name: 'Farm to Truck',
      foodType: 'American'
    }, {
      id: 5,
      name: 'Meatball.',
      foodType: 'Sandwiches'
    }, {
      id: 6,
      name: 'Basic Kneads',
      foodType: 'Pizza'
    }, {
      id: 7,
      name: 'Turn-In BBQ',
      foodType: 'Barbecue'
    }, {
      id: 8,
      name: 'Moontime Crepes',
      foodType: 'Crepes'
    }, {
      id: 9,
      name: 'Globe Hall BBQ',
      foodType: 'Barbecue'
    }, {
      id: 10,
      name: 'El Gallo Blanco',
      foodType: 'Tacos'
    }, {
      id: 11,
      name: 'Rolling Italian',
      foodType: 'Italian'
    }, {
      id: 12,
      name: 'Burger Chief',
      foodType: 'Burgers'
    }, {
      id: 13,
      name: 'Coastal Summit Fish Tacos',
      foodType: 'Tacos'
    }, {
      id: 14,
      name: 'Pasty Republic',
      foodType: 'European'
    }, {
      id: 15,
      name: 'Mile High Thai',
      foodType: 'Thai'
    }, {
      id: 16,
      name: 'Chicken Rebel',
      foodType: 'Sandwiches'
    }, {
      id: 17,
      name: 'Dos Abuelas',
      foodType: 'Puerto Rican'
    }, {
      id: 18,
      name: 'The Juicing Tree',
      foodType: 'Juice'
    }, {
      id: 19,
      name: 'El Pastorcito 2',
      foodType: 'Tacos'
    }, {
      id: 20,
      name: 'Yatai',
      foodType: 'Sushi'
    }, {
      id: 21,
      name: 'True West Tacos',
      foodType: 'Tacos'
    }, {
      id: 22,
      name: 'Aryeto',
      foodType: 'Puerto Rican'
    }, {
      id: 23,
      name: 'Michigan Colorado Chefs',
      foodType: 'American'
    }, {
      id: 24,
      name: 'Karma',
      foodType: 'Indian'
    }, {
      id: 25,
      name: 'MGJ\'s Burgers',
      foodType: 'Burgers'
    }, {
      id: 26,
      name: 'Spice Flow',
      foodType: 'American'
    }, {
      id: 27,
      name: 'Gyros King',
      foodType: 'Greek'
    }, {
      id: 28,
      name: 'Rocky Mountain Cheesery',
      foodType: 'Sandwiches'
    }, {
      id: 29,
      name: 'Mandeville Grill',
      foodType: 'Jamaican'
    }, {
      id: 30,
      name: 'ShaWING',
      foodType: 'Wings'
    }];

    return knex('truck').insert(trucks);
  });
  });
};
