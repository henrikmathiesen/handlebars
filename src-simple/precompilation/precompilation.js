Handlebars.partials = Handlebars.templates;

var data = {
    name: 'Foo'
};

// In package.json where we run the handlebars cli compiler we specify known helpers only, lets test adding an "unknown helper"
// - The compiler throws an error, lets test adding it to the list in package.json
// - It works, lets see if we need to register it bellow, we do need to register the helper
var unknownHelper = function (x) { 
    return x;
};
Handlebars.registerHelper('unknownHelper', unknownHelper);

// We use our compiled template like this, can also send in options as second argument
document.getElementById('app-01').innerHTML = Handlebars.templates.template(data);

// With a hyphen in the filename, it seams we must index into the name
document.getElementById('app-02').innerHTML = Handlebars.templates['template-too'](data);

// Templates in subfolders can also be indexed into (or we can use dot syntax of no hyphens)
document.getElementById('app-03').innerHTML = Handlebars.templates['sub-templates/sub-template'](data);
