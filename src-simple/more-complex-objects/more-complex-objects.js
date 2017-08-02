var template01 = 'My name is {{name}} and I live in {{address.city}} on {{address.street}}';
var compiled01 = Handlebars.compile(template01);
var data = {
    name: 'Foo',
    address: {
        city: 'South Park',
        street: 'Somestreet'
    }
};
var rendered01 = compiled01(data);
var $app = document.getElementById('app-01');
$app.innerHTML = rendered01;


// Instead of going into the object like address.city, we can use the with Block Helper

var template02 = 'My name is {{name}} and I live in {{#with address}} {{city}} on {{street}} {{/with}}';
var compiled02 = Handlebars.compile(template02);
document.getElementById('app-02').innerHTML = compiled02(data);
