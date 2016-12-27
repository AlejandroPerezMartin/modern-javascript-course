
/**
 * 'let' and 'var'
 */
const a = 'don\'t change me';

let str = 'hello';

{
    let str = 'bye';
}

console.log(str);
console.log(a);
