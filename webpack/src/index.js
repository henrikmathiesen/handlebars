// We dont need to require the handlebars runtime, handlebars-loader does that automaticly

var petsData = require('./data/petsData');
var template = require('./pets.handlebars');

document.getElementById('app').innerHTML = template(petsData);
