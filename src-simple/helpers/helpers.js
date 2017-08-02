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
    example: function (x) { 
        // this keyword refers to the context where helper was called
        return x;
    }
};

Handlebars.registerHelper('exampleHelper', helpers.example);

var template02 = '{{exampleHelper "foo"}}'; // can use space seperate multiple arguments
var compiled02 = Handlebars.compile(template02);
document.getElementById('app-02').innerHTML = compiled02();
