var data = {
    name: 'foo'
};

var template = document.getElementById('app-template').innerHTML;
var partial = document.getElementById('app-partial').innerHTML;
var compiled = Handlebars.compile(template);

//
// must register before render

Handlebars.registerPartial('partial', partial);
Handlebars.registerPartial('partialToo', 'partial from inline template {{name}}');

axios.get('partial.hbs')
    .then(function (response) {
        Handlebars.registerPartial('externalPartial', response.data);

        // render
        document.getElementById('app').innerHTML = compiled(data);
    });


