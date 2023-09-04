// union and literals types and type alises

type Combinable = number | string;
type OperationType = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  operationType: OperationType
) {
  let result: Combinable;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    operationType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(3, 4, "as-number"));
console.log(combine("3", "4", "as-number"));
console.log(combine(3, "4", "as-number"));
console.log(combine(3, "4", "as-string"));
