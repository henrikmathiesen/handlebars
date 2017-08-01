var template = document.getElementById('app-template').innerHTML;
var compiled = Handlebars.compile(template);
var data = {
    name: 'Foo',
    address: {
        city: 'South Park',
        street: 'Somestreet'
    }
};

document.getElementById('app').innerHTML = compiled(data);
