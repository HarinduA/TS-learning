// 1. Variables and Types
let userName: string = "Alice";
let userAge: number = 25;
let isAdmin: boolean = true;

// 2. Function with Types
function greetUser(name: string, age: number): string {
  return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greetUser(userName, userAge));

// 3. Interface
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

// 4. Class implementing the interface
class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
    console.log(`User ${user.name} added.`);
  }

  listUsers(): void {
    console.log("Current Users:");
    this.users.forEach((user) =>
      console.log(`- ${user.name} (${user.email}) [Admin: ${user.isAdmin}]`)
    );
  }
}

// 5. Using the class
const manager = new UserManager();

manager.addUser({ id: 1, name: "Alice", email: "alice@example.com", isAdmin: true });
manager.addUser({ id: 2, name: "Bob", email: "bob@example.com", isAdmin: false });

manager.listUsers();
