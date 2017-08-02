var template = '{{#list people}}{{firstName}} {{lastName}}{{/list}}';
var compiled = Handlebars.compile(template);
var data = {
    people: [
        { firstName: "Yehuda", lastName: "Katz" },
        { firstName: "Carl", lastName: "Lerche" },
        { firstName: "Alan", lastName: "Johnson" }
    ]
};

Handlebars.registerHelper('list', function (items, options) {
    var out = "<ul>";

    for (var i = 0; i < items.length; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>";
});

document.getElementById('app-01').innerHTML = compiled(data);
