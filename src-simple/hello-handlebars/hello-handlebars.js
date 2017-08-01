// Handlebars.compile takes a template string and options (optional)
// Handlebars.compile returns a function that can be executed with data (context), it can be run multiple times

var template = Handlebars.compile('<div>Hello {{name}}</div>');

var $app = document.getElementById('app');
$app.innerHTML = template({ name: 'Foo' });

var $appToo = document.getElementById('app-too');
$appToo.innerHTML = template({ name: 'Bar' });

// Handlebars.compile using options

var templateSpicy = Handlebars.compile('<div>{{itsAlive}}</div>', { noEscape: true });
var $appSpicy = document.getElementById('app-spicy');
$appSpicy.innerHTML = templateSpicy({ itsAlive: '<i>Hi there</i>' });
