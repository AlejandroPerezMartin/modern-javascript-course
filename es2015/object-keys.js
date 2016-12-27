
/**
 * Object keys
 */
var obj = {
    'one': 1,
    'two': 2,
    'three': 3
};

var keys = Object.keys(obj);

keys.map(function(key){
    console.log(obj[key]);
});
