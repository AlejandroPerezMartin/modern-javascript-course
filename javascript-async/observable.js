
var Rx = require('rx');

var arr = Rx.Observable.interval(500);

arr.subscribe(function(num) {
  console.log('My number is ' + num);
});
