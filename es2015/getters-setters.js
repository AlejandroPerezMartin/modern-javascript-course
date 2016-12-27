
/**
 * Getters and setters
 */
var person = {
    firstName: 'Alejandro',
    lastName: 'Perez',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        var fullNameArray = value.split(' ');
        this.firstName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    }
};

console.log(person.fullName);

person.fullName = 'Other Name';

console.log(person.fullName);
