// union

function combine(
  input1: number | string,
  input2: number | string,
  operationType: "as-number" | "as-string"
) {
  let result: string | number;
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
console.log(combine(3, "4", "as-string"));
