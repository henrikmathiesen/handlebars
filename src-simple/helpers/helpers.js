// Since we cant use much logic inside a template, we can instead do functions on the data (context)
// These functions or localy scoped to the context

var template01 = '{{x}} + {{y}} = {{sum}}';
var compiled01 = Handlebars.compile(template01);
var data01 = {
    x: 2,
    y: 3,
    sum: function () {
        return this.x + this.y;
    }
};
document.getElementById('app-01').innerHTML = compiled01(data01);

//
// Handlebars Helpers are globaly scoped (accessible from any template) and implemented in Handlebars
// - Helpers must be registered before rendering it
// - Helper reference (the first argument in registerHelper) will override properties 
// therefor we name them xxxHelper , could also use this keyword infront of every property (but that is not optimal)
// - It can be a good practice to include Helpers in a seperate file

var helpers = {
    exampleHelper: function (x) {
        // this keyword refers to the context where helper was called
        return x;
    },
    safeHelper: function () {
        // can render non escaped html with this constructor
        return new Handlebars.SafeString('<i>foo</i>');
    },
    escapeHelper: function () { 
        // this will escape the html code so browsers dont render it
        return Handlebars.escapeExpression('<i>foo</i>');
    }
};

Handlebars.registerHelper('exampleHelper', helpers.exampleHelper);
Handlebars.registerHelper('safeHelper', helpers.safeHelper);
Handlebars.registerHelper('escapeHelper', helpers.escapeHelper);

var template02 = '{{exampleHelper "foo"}}'; // can use space seperate multiple arguments
var compiled02 = Handlebars.compile(template02);
document.getElementById('app-02').innerHTML = compiled02();

// Can use helpers from js code also
console.log(Handlebars.helpers.exampleHelper('bar'));

var template03 = '{{safeHelper}}';
var compiled03 = Handlebars.compile(template03);
document.getElementById('app-03').innerHTML = compiled03();

// if we use {{}} handlebars will escape again, so we use {{{}}} to display the escaped html
var template04 = '{{{escapeHelper}}}';
var compiled04 = Handlebars.compile(template04);
document.getElementById('app-04').innerHTML = compiled04();
