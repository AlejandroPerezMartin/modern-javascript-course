
/**
 * Object literals (dinamic adding properties)
 */
obj = {
    property: "My property"
};
obj['prop_' + 3] = 45;

console.log(obj);
