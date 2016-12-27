
/**
 * Promises
 */
var promise = new Promise(function(resolve, reject){
    // reject('Not resolved');
    setTimeout(function(){
        resolve('Resolved!');
    }, 1000);
});

promise
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    });

// Wait for all promises to resolve
Promise.all([promise]).then( (values) => {
    console.log(values);
});
