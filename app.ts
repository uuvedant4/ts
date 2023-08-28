const add = (num1: number, num2: number) => {
  return num1 + num2;
};

const num1: number = 3;
const num2: number = 4;

console.log(add(num1, num2));

// const names: any[] = ["Vedant", "Parth", "John", 4];
const names: string[] = ["Vedant", "Parth", "John"];
console.log(names);

// Enum

enum SDE_LEVEL {
  I = 1,
  II = 2,
  III = 3,
}

const userDetails: {
  name: string;
  hobbies: string[];
  age: number;
  role: [string, number]; // tuple
} = {
  name: "Vedant Yetekar",
  hobbies: ["music", "coding"],
  age: 21,
  role: ["SDE", SDE_LEVEL.I],
};

userDetails.role[1] = 1;
