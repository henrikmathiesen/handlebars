// Handlebars.compile takes a template string and options (optional)
// Handlebars.compile returns a function that can be executed with data (context), its a cached version that can be run multiple times

var template = Handlebars.compile('<div>Hello {{name}}</div>');

var $app = document.getElementById('app');
$app.innerHTML = template({ name: 'Foo' });

var $appToo = document.getElementById('app-too');
$appToo.innerHTML = template({ name: 'Bar' });

// Handlebars.compile using options (render html as non escaped)

var templateSpicy = Handlebars.compile('<div>{{itsAlive}}</div>', { noEscape: true }); // could also use {{{itsAlive}}} (3 curly braces)
var $appSpicy = document.getElementById('app-spicy');
$appSpicy.innerHTML = templateSpicy({ itsAlive: '<i>Hi there</i>' });

//
// "The handlebars dance"
// - For clarity
// * Get the template
// * Compile template
// * Render with data
// * Insert into DOM

var templateFoo = 'My name is {{name}}';
var compiledFoo = Handlebars.compile(templateFoo);
var dataFoo = { name: 'Foo' };
var renderedFoo = compiledFoo(dataFoo);
var $appDance = document.getElementById('app-dance');
$appDance.innerHTML = renderedFoo;
