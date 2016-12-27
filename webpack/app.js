
var _ = require('underscore');

var persons = ['Alejandro Perez', 'Ivan Gutierrez', 'Antonio Rodriguez'];

_.each(persons, function(person){
    console.log("Hello", person);
});

if (DEV) {
    console.log("text");
}

var html = require('./index.html');
