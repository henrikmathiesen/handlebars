var data = {
    name: 'foo'
};

var template = document.getElementById('app-template').innerHTML;
var partial = document.getElementById('app-partial').innerHTML;
var compiled = Handlebars.compile(template);

// must register before render
Handlebars.registerPartial('partial', partial);
Handlebars.registerPartial('partialToo', 'partial from inline template {{name}}');

// render
document.getElementById('app').innerHTML = compiled(data);
