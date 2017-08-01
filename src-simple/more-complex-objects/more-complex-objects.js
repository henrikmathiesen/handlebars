var template = 'My name is {{name}} and I live in {{address.city}} on {{address.street}}';
var compiled = Handlebars.compile(template);
var data = {
    name: 'Foo',
    address: {
        city: 'South Park',
        street: 'Somestreet'
    }
};
var rendered = compiled(data);
var $app = document.getElementById('app');
$app.innerHTML = rendered;
