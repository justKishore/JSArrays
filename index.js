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

// 7. Splice

// 7.1 Add elements to array using splice
players.splice(3,0,"Hazard","Kroos"); // Adds Hazard to 3rd index and Kroos to 4th index
console.log(players); // op: (7) ['Ronaldo', 'Messi', 'Neymar', 'Hazard', 'Kroos', empty, 'Bruno']

// 7.2 Add elements by replacing 
players.splice(3,2,"Pogba","Rashford"); // Replace Hazard and Kroos with Pogba and Rashford respectively
console.log(players); // op: (7) ['Ronaldo', 'Messi', 'Neymar', 'Pogba', 'Rashford', empty, 'Bruno']

// 7.3 Remove elements using splice
players.splice(5,1); // Remove empty at index 5
console.log(players); // op: (6) ['Ronaldo', 'Messi', 'Neymar', 'Pogba', 'Rashford', 'Bruno']

// 8. Concat
const city = ['Madrid','Barcelona','Pari','Turin','Manchester','Lisbon'];
const playerCity = players.concat(city);
console.log("Players: "+players); // op: Players: Ronaldo,Messi,Neymar,Pogba,Rashford,Bruno
console.log("City: "+city); // op: City: Madrid,Barcelona,Pari,Turin,Manchester,Lisbon
console.log("Players + city: "+playerCity); //op: Players + city: Ronaldo,Messi,Neymar,Pogba,Rashford,Bruno,Madrid,Barcelona,Pari,Turin,Manchester,Lisbon

// 9. Slice
const goats = players.slice(0,2);
console.log("Goats: "+goats); // op: Goats: Ronaldo,Messi

// 10. Convert to string
var playersString = players.toString();
console.log(players); // op: (6) ['Ronaldo', 'Messi', 'Neymar', 'Pogba', 'Rashford', 'Bruno']
console.log("Players in string: "+playersString); //op: Players in string: Ronaldo,Messi,Neymar,Pogba,Rashford,Bruno

// 11. Sort
players.sort();
console.log(players); // op: (6) ['Bruno', 'Messi', 'Neymar', 'Pogba', 'Rashford', 'Ronaldo']

// 12. Reverse
players.reverse();
console.log(players) // op: (6) ['Ronaldo', 'Rashford', 'Pogba', 'Neymar', 'Messi', 'Bruno']

// 13. Numeric Sort

// 14. Max and Min
const numbers = [1,2,10,25];
console.log("Maximum: "+Math.max.apply(null,numbers)); // op: Maximum: 25
console.log("Minimum: "+Math.min.apply(null,numbers)); // op: Minimum: 1
