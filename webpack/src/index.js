// We dont need to require the handlebars runtime, handlebars-loader does that automaticly

import petsData from './data/petsData';
import template from './pets.handlebars';

document.getElementById('app').innerHTML = template(petsData);
