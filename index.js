// Creating an Array

const players = ['Ronaldo','Messi','Neymar','Hazard','Ozil'];

console.log(players); // op: (5) ['Ronaldo', 'Messi', 'Neymar', 'Hazard', 'Ozil']

// Index of Array

console.log(players[0]) // op: Ronaldo

// Changing an Array element

players[4] = 'Bruno';

console.log(players); // op: (5) ['Ronaldo', 'Messi', 'Neymar', 'Hazard', 'Bruno']

// Array Methods

// 1. Length
console.log(players.length); // op: 5

// 2. Push
players.push('Ozil');
console.log(players); // op: (6) ['Ronaldo', 'Messi', 'Neymar', 'Hazard', 'Bruno', 'Ozil']

// 3. Pop

let x = players.pop(); // Removes last element
console.log("Popped: "+x); // op: Popped: Ozil
console.log(players); // op: (5) ['Ronaldo', 'Messi', 'Neymar', 'Hazard', 'Bruno']

// 4. Shift

x = players.shift(); // Removes first element
console.log("Shifted: "+x); // op: Shifted Ronaldo
console.log(players); // op: (4) ['Messi', 'Neymar', 'Hazard', 'Bruno']

// 5. Unshift

x = players.unshift('Ronaldo');
console.log("Unshifted: "+x); //op: Unshifted: 5 (Returns new length)
console.log(players); // op: (5) ['Ronaldo', 'Messi', 'Neymar', 'Hazard', 'Bruno']

// 6. Delete

delete players[3]; // Changes the 4th element in fruits to undefined
console.log(players); // op: (5) ['Ronaldo', 'Messi', 'Neymar', empty, 'Bruno'] (length remains 5)


