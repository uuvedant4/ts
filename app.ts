// return type

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(result: number): void {
  console.log(result);
  return;
}

console.log(printResult(add(10, 44)));

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number; // more specific
// combinedValues = printResult; error
combinedValues = add;

console.log(combinedValues(10, 10));

function multiply(n1: number, n2: number, cb: (result: number) => void): void {
  cb(n1 * n2);
}

multiply(3, 2, printResult);

// unknown

/*
let username: any = "Vedant";
username = 777;

let userId: string = "Vedant";
userId = username;
*/

let username: unknown = 777;
username = "Vedant";

let userId: string = "Vedant";

if (typeof username === "string") {
  userId = username;
}

// never

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// generateError("An error occured!", 500);
