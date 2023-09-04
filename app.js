// return type
function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log(result);
    return;
}
console.log(printResult(add(10, 44)));
// let combinedValues: Function;
var combinedValues; // more specific
// combinedValues = printResult; error
combinedValues = add;
console.log(combinedValues(10, 10));
function multiply(n1, n2, cb) {
    cb(n1 * n2);
}
multiply(3, 2, printResult);
