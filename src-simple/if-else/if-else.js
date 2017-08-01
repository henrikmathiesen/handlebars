var template = document.getElementById('app-template').innerHTML;
var compiled = Handlebars.compile(template);
var data = { 
    isTruthy: true,
    canDance: false
}

document.getElementById('app').innerHTML = compiled(data);
