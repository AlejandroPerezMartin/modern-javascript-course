
/**
 * Object destruction
 */
var prism = {
    'l': 5,
    'w': 10
};

function rectPrismArea({l, w, h = 10}){
    return l * w * h;
}

var {l,w} = prism; // var l = prism.a; var w = prism.b;

console.log(l);
console.log(w);

console.log(rectPrismArea(prism));
