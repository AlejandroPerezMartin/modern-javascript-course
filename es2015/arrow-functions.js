
/**
 * Arrow functions
 */
let obj = {
    collection: ['alejandro', 'antonio', 'juan'],
    domain: 'angularcourse.com',
    method: function method(){
        return this.collection.map( (item) => {
            return `${ item }@${ this.domain }`;
        });
    }
};

console.log(obj.method());
