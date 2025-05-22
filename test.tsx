// Type Annotations
let username: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// Arrays and Tuples
let scores: number[] = [90, 85, 88];
let userTuple: [string, number] = ["Bob", 30];

// Interface
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
}

// Function with typed parameters and return type
function greet(user: User): string {
  return `Hello, ${user.name}. You are ${user.age} years old.`;
}

const user1: User = { name: "Charlie", age: 28 };
console.log(greet(user1));

// Union and Literal Types
function printStatus(status: "success" | "error"): void {
  console.log(`Status: ${status}`);
}

printStatus("success");

// Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(`Moving: ${Direction[move]}`);

// Class with constructor and method
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Rex");
dog.speak();
