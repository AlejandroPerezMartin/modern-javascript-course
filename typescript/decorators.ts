
/**
 * Decorators
 */
function clean (value: boolean) {
    return function (target) {
        target.cleaned = value;
    };
}

@clean(true)
class Animal {
}

let x = new Animal();

console.log(x);
