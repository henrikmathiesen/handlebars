var data = {
    type: 'dog',
    names: [
        'Fluffy',
        'Bo',
        'Tiamat'
    ],
    foos: [
        {
            name: 'bar'
        },
        {
            name: 'baz'
        }
    ]
}

var template = document.getElementById('app-template').innerHTML;
var compiled = Handlebars.compile(template);
document.getElementById('app').innerHTML = compiled(data);
