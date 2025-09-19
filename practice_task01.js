// Build a small system that stores user profiles and lets you update them.

// Requirements:
// Create an array of user objects:
// Write a function makeAdmin(id) that turns a user into an admin.
// Create a clone of the users array before updating, and observe the behavior.
// Show how modifying the clone does or does not affect the original.
const users = [
  { id: 1, name: "Alice", isAdmin: false },
  { id: 2, name: "Bob", isAdmin: true },
  { id: 3, name: "Charlie", isAdmin: true },
  { id: 4, name: "Diana", isAdmin: false }
];

// makeAdmin function
function makeAdmin(id) {
  // Clone the users array
  const usersClone = JSON.parse(JSON.stringify(users));
    // Find the user by id and update isAdmin to true
    const user = usersClone.find(user => user.id === id);
    if (user) {
      user.isAdmin = true;
      console.log(`User ${user.name} is now an admin.`);
    } else {
      console.log("User not found.");
    }
    usersClone.push({id:5,name:"Eve",isAdmin:false});
    console.log("Cloned Users Array:", usersClone);
    console.log("Original Users Array:", users);
}
// Test the function
makeAdmin(1); // Alice becomes an admin

