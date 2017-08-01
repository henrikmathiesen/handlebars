// Handlebars.compile returns a function that can be executed with data, it can be run multiple times
var template = Handlebars.compile('<div>Hello {{name}}</div>');

var $app = document.getElementById('app');
$app.innerHTML = template({ name: 'Foo' });

var $appToo = document.getElementById('app-too');
$appToo.innerHTML = template({ name: 'Bar' });
