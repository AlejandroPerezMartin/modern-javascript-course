
/**
 * Rest (...) parameters
 */
function printArguments(...args){
    args.forEach(function(arg){
        console.log(arg.name);
    });
}

printArguments(
    { name: 'Alejandro'},
    { name: 'Pepe'}
);
