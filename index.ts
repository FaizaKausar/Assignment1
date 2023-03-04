// Q2.
let studentName = "Ayesha";
console.log('Hello',{studentName}, 'would you like to learn some Typescript today?'); 

// Q3

var myName = "Ayesha";
console.log("name lowerCase: ", myName.toLowerCase());
console.log("name uppercase: ", myName.toUpperCase());
console.log("name titlecase: ", myName.charAt(0).toUpperCase() + myName.substr(1).toLowerCase());

// Q4

var quote: string =
  "God's goal is not to get what you want; it is to get you what you need.";
var authorName= "Max Lucado";

console.log(`${authorName} said, "${quote}"`);

//Q5

var quote = "You change your life by changing your heart.";
var author = "Max Lucado";

var messag = `${author} said, "${quote}"`;
console.log(messag);

//Q6


var firstName = "\n\t Ayesha \n";
console.log(firstName);
console.log(firstName.trim());
//Q7

var addition: number = 2 + 6;
var subtraction: number = 16 - 8;
var multiplication: number = 2 * 4;
var division: number = 16 / 2;
console.log(
  "addition: ",
  addition,
  "subtraction: ",
  subtraction,
  "multiplication: ",
  multiplication,
  "division: ",
  division
);
//Q8

var addition: number = 2 + 6;
var subtraction: number = 16 - 8;
var multiplication: number = 2 * 4;
var division: number = 16 / 2;

console.log("addition", addition);
console.log("subtraction", subtraction);
console.log("multiplication", multiplication);
console.log("division", division);
//Q9

var favoriteNum: number = 9;

var message: string = `My favorite number is ${favoriteNum}`;

console.log(messag);

// Q 10
var friendArr: string[] = ["Aneela", "Abeera", "Shazia"];

//1st Method
console.log(friendArr[0]);
console.log(friendArr[1]);
console.log(friendArr[2]);
console.log("\n---------2nd Method-----------\n");
//2nd Method
for (var i = 0; i <= friendArr.length - 1; i++) 
  console.log(friendArr[i]);

  //Q 11
  
var friends= ["aneela", "Abeera","shazia"];
//printing message to my friends by using Array-index method
console.log('Hello ${friends[0]}, How do you do?'); 
console.log('Hello ${friends[1]}, How do you do?');
console.log('Hello ${friends[2]}, How do you do?'); 
console.log('Hello ${friends[3]}, How do you do?');

//printing message to my friends using for loop
console.log("\nPrinting message using Forloop");
for (let i=0; i < friends.length; i++) {
    console.log('Hello ${friends[i]}, How are you?')
};




// Q 12

var myCars = ["BMW", "GTR", "Audi"];
console.log('My favourite car is ${myCars[0]}');
console.log('I would like to own a ${myCars[1]}.');
console.log('My favourite car for drifting is ${myCars[2]} ');

// Q 13



  var guestlist = ["Alisha" , "Sana" , "Iqra"];
   
    var msg1 = ' Dear Alisha , it would be an honor to have you join me for dinner.'
  
   var msg2 = 'Dear Sana , I would  to have the opportunity to hear your stories over dinner.'
    
    var msg3= 'Dear Iqra,  I would love to have the chance to thank you for your gift over dinner.'


  console.log(`\n\n${msg1}\n\nSincerely,\n[Faiza]`);
  console.log(`\n\n${msg2}\n\nSincerely,\n[Faiza]`);
  console.log(`\n\n${msg3}\n\nSincerely,\n[Faiza]`);

//Q 14


var guestlist = ["Alisha" , "Sana" , "Iqra"];

// Remove the guest who can't make it
var guestToRemove = ("Iqra");
guestlist = guestlist.filter(guest => guest !== guestToRemove);

// Add a new guest
var newGuest =  "Fatima" ;
guestlist.push("Iqra");

// Send out the new invitations

  console.log(`Dear ${newGuest}, please join us for dinner at 7pm today.`);


//Q 15

const guastList: string[] = ["Alisha" , "Sana" , "Iqra" ,"Fatima"];

const unableToAttend: string = "Iqra";

// Remove the guest who can't attend from the list
const updatedGuests: string[] = guastList.filter((guest) => guest !== unableToAttend);

// Print the updated list of guests
console.log("Updated list of guests:");
console.log(updatedGuests);

// Print the name of the guest who can't make it
console.log(`${unableToAttend} can't make it.`);

//Modify your list, replacing the name of the guest who can’t make it with the name of 
//the new person you are inviting.
const guests: string[] = ["Ailsha" , "Sana" , "Iqra",];
const replacedguest = ["Alisha" , "Sana" ,"Fatima"];
console.log( replacedguest);
//• Print a second set of invitation messages, one for each person who is still in
// your list
var list=  ["Alisha" , "Sana" ,"Fatima"];
var msg1 = ' Dear Alisha , it would be an honor to have you join me for dinner.'
var msg2 = 'Dear Sana , I would  to have the opportunity to hear your stories over dinner.'  
var msg3 = 'please join us for dinner at 7pm today.'

console.log(`\n\n${msg1}\n\nSincerely,\n[Faiza]`);
console.log(`\n\n${msg2}\n\nSincerely,\n[Faiza]`);
console.log(`\n\n${msg3}\n\nSincerely,\n[Faiza]`);
 //Q16
 interface Guest {
  name: string;
  age: number;
  occupation: string;
}

const originalGuests: Guest[] = [
  { name: "Alisha", age: 19, occupation: "Teacher" },
  { name: "Sana", age: 20, occupation: "Doctor" },
  { name: "Fatima", age: 25, occupation: "Actress" }
];

const newGuests: Guest[] = [
  { name: "Aleena", age: 18, occupation: "Chef" },
  { name: "Sehrish", age: 22, occupation: "Shopkeeper" },
  { name: "Rumi", age: 21, occupation: "Singer" }
];

const biggerTableCapacity: number = 6;

if (originalGuests.length + newGuests.length <= biggerTableCapacity) {
  const allGuests: Guest[] = [...originalGuests, ...newGuests];
  console.log("All guests:", allGuests);
} else {
  console.log("Yeah, the table is big enough for all guests.");
}

let guestList: string[] = ["Ailsha" , "Sana" , "Iqra","Fatima"];

// Adding a new guest to the beginning of array
guestList.unshift("Ainee");

// Adding a new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Maria");

// Adding a new guest to the end of the array using append()
guestList = [...guestList, "Dua"];

// Print invitation messages for each guest in the list
guestList.forEach((guest: string) => {
  console.log(`Dear ${guest}, please join me at dinner today at 8'O clock!`);
});

// Q 17

let guestList1: string[] = ["Ainee" , "Alisha" , "Sana" , "Iqra" ,"Fatima", "Dua"];

while (guestList1.length > 2) {
  guestList1.pop();
}

guestList1.forEach((guest: string) => {
  console.log(`Dear ${guest}, unfortunately, due to unforeseen circumstances, we have had
   to reduce the number of guests for the dinner party.`);
});

console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");

while (guestList1.length > 2) {
  let removedGuest: string = guestList1.pop()!;
  console.log(`Dear ${removedGuest}, unfortunately, due to unforeseen circumstances, we can
   no longer invite you to dinner. We hope to see you soon.`);
}

guestList1.forEach((guest: string) => {
  console.log(`Dear ${guest}, you're still invited to dinner. I can't wait to see you!`);
});
guestList1.splice(0, 2);
console.log(guestList1);


//Q 18



// Define an array of places to visit
const placesToVisit: string[] = ["Lahore", "Karachi", "Islamabad", "Faisalabad", ""];

// Print the original array
console.log("Original Array:", placesToVisit);

// Print the array in alphabetical order without modifying it
console.log("Sorted Array (Alphabetical):", [...placesToVisit].sort());

// Print the original array to show it is still in its original order
console.log("Original Array (Unchanged):", placesToVisit);

// Print the array in reverse alphabetical order without modifying it
console.log("Sorted Array (Reverse Alphabetical):", [...placesToVisit].sort().reverse());

// Print the original array to show it is still in its original order
console.log("Original Array (Unchanged):", placesToVisit);

// Reverse the order of the original list
placesToVisit.reverse();

// Print the reversed array
console.log("Reversed Array:", placesToVisit);

// Reverse the order of the original list again to show it's back to its original order
placesToVisit.reverse();
console.log("Original Array (Back to Original Order):", placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted Array (Alphabetical):", placesToVisit);

// Sort the array to change its order to reverse alphabetical
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted Array (Reverse Alphabetical):", placesToVisit);

// Q 19

const guestlist2 = ["Ainee" , "Alisha" , "Sana" , "Iqra" ,"Fatima", "Dua"];

console.log(guestlist2.length);

 // Q 20

 
 const languages = ["Urdu", "Punjabi", "English", "Pashto", "Sindhi", "Balochi"];

 console.log(languages);
 

// Q 21


const student  =  {
  name: "Ayesha",
  age: 23,
  gender: "female",
}
console.log(student);



// Q 22

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]); // Produces an index error
console.log(numbers[4]); 

// Q 23
let a = 5;
let b = 10;
let c = 15;

console.log("Is a greater than b? I predict False.");
console.log(a > b);

console.log("Is a less than or equal to b? I predict True.");
console.log(a <= b);

console.log("Is a + b equal to 15? I predict True.");
console.log(a + b === 15);

console.log("Is a multiplied by b not equal to 50? I predict False.");
console.log(a * b !== 50);

console.log("Is a equal to c? I predict False.");
console.log(a === c);

console.log("Is a not equal to c? I predict True.");
console.log(a !== c);

console.log("Is b greater than 5 AND less than 20? I predict True.");
console.log(b > 5 && b < 20);

console.log("Is a less than 5 OR b greater than 15? I predict False.");
console.log(a < 5 || b > 15);

console.log("Is c a string? I predict False.");
console.log(typeof c === 'string');

console.log("Is a the boolean? I predict False.");
console.log(typeof a === 'boolean');
// Q 24

// Equality and inequality with strings
let string1 = 'hello';
let string2 = 'HELLO';
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 === string2);

console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2);

// Lower case function
let str3 = 'wOrLD';
console.log("Is str3 all lowercase? I predict False.");
console.log(str3.toLowerCase() === str3);

// Numerical tests
let num1 = 10;
let num2 = 25;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num2 less than or equal to num1? I predict True.");
console.log(num2 <= num1);

console.log("Is num1 equal to num2 plus 15? I predict True.");
console.log(num1 === num2 + 15);

console.log("Is num2 not equal to num1 multiplied by 2? I predict False.");
console.log(num2 !== num1 * 2);

console.log("Is num1 greater than or equal to 11? I predict false.");
console.log(num1 >= 11);

console.log("Is num2 less than 22? I predict False.");
console.log(num2 < 22);

// Logical AND and OR operators
let firstName1 = true;
let firstName2 = false;
console.log("Is firstName1 AND firstName2 true? I predict False.");
console.log(firstName1 && firstName2);

console.log("Is firstName1 OR firstName2 true? I predict True.");
console.log(firstName1 || firstName2);

// Array tests
let arr = ['red', 'green', 'yellow'];
console.log("Is 'green' in the array? I predict True.");
console.log(arr.includes('green'));

console.log("Is 'purple' not in the array? I predict True.");
console.log(!arr.includes ('purple'));

//Q 25
const alienColor: 'green' | 'yellow' | 'red' = 'green';

if (alienColor === 'green') {
  console.log('Congratulations! You just earned 5 points for shooting down a green alien!');
}
// alien_color is assigned a value of 'yellow' which is failing version:

const alienColor1: 'green' | 'yellow' | 'red' = 'yellow';

if (alienColor === 'green') {
  console.log('Congratulations! You just earned 5 points for shooting down a green alien!');
}
// Q 26
const alienColor2  = 'green';

if (alienColor2 === 'green') {
  console.log('Congratulations! You just earned 5 points for shooting down a green alien!')}
else {
  console.log("the player just earned 10 points.")
}
// Define the alien color
const alienColor3: string = 'purple';

// Check the alien color using an if-else chain
if (alienColor3 === 'green') {
  console.log('You just earned 5 points for shooting the green alien!');
} else {
  console.log('You just earned 10 points for shooting the alien!');
}
// Q 27
// Version 1
const alienColor4: string = 'green';
if (alienColor4 === 'green') {
  console.log('You just earned 5 points for shooting the green alien!');
} else if (alienColor1 === 'yellow') {
  console.log('You just earned 10 points for shooting the yellow alien!');
} else if (alienColor1 === 'red') {
  console.log('You just earned 15 points for shooting the red alien!');
}

// Version 2
const alienColor5 = 'yellow';
if (alienColor === 'green') {
  console.log('You just earned 5 points for shooting the green alien!');
} else if (alienColor5 === 'yellow') {
  console.log('You just earned 10 points for shooting the yellow alien!');
} else if (alienColor5 === 'red') {
  console.log('You just earned 15 points for shooting the red alien!');
}
// Version 3
const alienColor6: string = 'red';
if (alienColor6 === 'green') {
  console.log('You just earned 5 points for shooting the green alien!');
} else if (alienColor6 === 'yellow') {
  console.log('You just earned 10 points for shooting the yellow alien!');
} else if (alienColor6 === 'red') {
  console.log('You just earned 15 points for shooting the red alien!');
}

// Q 28
let age = 1;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else if (age < 80)  {
  console.log("The person is an elder.");
}

// Q 29

const favorite_fruits: string[] = ['strawberry', 'apple', 'watermelon'];

if (favorite_fruits.includes('strawberry')) {
  console.log('You really like strawberries!');
}

if (favorite_fruits.includes('apple')) {
  console.log('You really like apples!');
}

if (favorite_fruits.includes('watermelon')) {
  console.log('You really like watermelons!');
}

if (favorite_fruits.includes('apple')) {
  console.log('You really like apples!');
}

if (favorite_fruits.includes('orange')) {
  console.log('You really like oranges!');
}


// Q 30

const usernames = ['admin', 'Syra', 'Farhana', 'Lubna', 'Shazia'];

for (const username of usernames) {
  if (username === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
// Q 31

let age1 = 25;
const users = ["Saadia", "Maria", "Saba"];

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  if (age < 2) {
    console.log("The person is a baby.");
  } else if (age < 4) {
    console.log("The person is a toddler.");
  } else if (age < 13) {
    console.log("The person is a kid.");
  } else if (age < 20) {
    console.log("The person is a teenager.");
  } else if (age < 65) {
    console.log("The person is an adult.");
  } else if (age < 80) {
    console.log("The person is an elder.");
  }
}

// Q 32


const current_users = ['Jamil', 'Saadia', 'Habiba', 'Tania', 'Laiba'];
const new_users = ['Maryum', 'Maria', 'Jamil', 'Kamil','Habiba'];

for (let i = 0; i < new_users.length; i++) {}
  let is_username_taken: boolean = false;

  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
     is_username_taken = true;
      break;
    }
  }

  if (is_username_taken) {
    console.log(`Sorry, the username "${new_users[i]}" is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations, the username "${new_users[i]}" is available.`);
    current_users.push(new_users[i]);
  }

  // Q 33

  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let ordinalEnding: string;

  if (i === 0) {
    ordinalEnding = "st";
  } else if (i === 1) {
    ordinalEnding = "nd";
  } else if (i === 2) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(`${numbers[i]}${ordinalEnding}`);
}

// Q 34 
let favoritePizzas = ['Margherita', 'Pepperoni', 'Hawaiian'];

// Print the names of the pizzas
console.log('favorite pizzas:');
for (let pizza of favoritePizzas) {
  console.log(pizza);
}

// Print a sentence about each pizza
console.log('Here are somethings I like about each pizza:');
for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Print a final statement
console.log('Overall, I really love pizza!');

// Q 35

interface Animal {
  name: string;
  characteristic: string;
}

// Create an array of animals with a common characteristic
const animals = [
  { name: 'Dog', characteristic: 'Loyal' },
  { name: 'Cat', characteristic: 'Lovely'},
  { name: 'Rat', characteristic: 'Cute' },
];

// Loop through each animal and print its name and a statement about it
for (let animal of animals) {
  console.log(`${animal.name} is ${animal.characteristic}.`);
}

// Print a final statement about the animals' common characteristic
console.log(`Any of these animals would make a great pet!`);


// Q 36

function makeshirt(size: string, message: string): void {
  console.log(`Making a ${size} shirt with the message: "${message}"`);
}
makeshirt('small', 'Hello, Kitty!');


// Q 37 

function make_shirt(size = 'large', message = 'I love TypeScript'): void {
  console.log(`Making a "${size}" shirt with the message: "${message}"`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'TypeScript is awesome!');

// Q 38

function describe_city(city: string, country: string = 'USA') {
  console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('New York'); 
describe_city('London', 'UK');

// Q 39
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Sydney", "Australia"));

// Q 40 
interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist,
    title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

const album1 = make_album('Taylor Swift', '1989');
const album2 = make_album('The Beatles', 'Abbey Road', 17);
const album3 = make_album('Ed Sheeran', '+', 12);

console.log(album1);
console.log(album2);
console.log(album3);

const album4 = make_album('Lorde', 'Melodrama', 11);
console.log(album4);

// Q 41
// Define an array of magician's names
const magicians = ['Sultan', 'Kazim Pasha', 'Sajjad Shah', 'Taimoor'];

// Define the show_magicians() function
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Call the show_magicians() function and pass in the magicians array
show_magicians(magicians);

// Q 42
const magicians1 = ['Sultan Jamal', 'Kazim Hussain Pasha', 'Sajjad Ali Shah', 'Taimoor Khan'];

function show_magicians1(magicians1: string[]): void {
  for (const magician1 of magicians1) {
    console.log(magician1);
  }
}
// Define the make_great() function
function make_great(magicians1: string[]): string[] {
  const great_magicians1: string[] = [];
  for (const magician1 of magicians1) {
    great_magicians1.push(magician1 + " the Great");
  }
  return great_magicians1;
}

// Call the make_great() function to modify the magicians array
const great_magicians1 = make_great(magicians1);

// Call the show_magicians() function to see that the list has been modified
show_magicians1(great_magicians1);

// Q 43

function make_great1(magicians: string[]): string[] {
  return magicians.map(name => `Great ${name}`);
}

function show_magicians2(magicians: string[]): void {
  console.log(magicians.join(", "));
}
const magicians2 = ['Sultan', 'Kazim Pasha', 'Sajjad Shah', 'Taimoor'];

// Call make_great with a copy of the array
const great_magicians: string[] = make_great([...magicians]);

// Show both arrays
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);


// Q 44
function orderSandwich(...items: string[]): void {
  console.log("Sandwich summary:");
  if (items.length === 0) {
    console.log("No items specified.");
  } else {
    console.log("- " + items.join("\n- "));
  }
}
orderSandwich("turkey", "lettuce", "tomato");
orderSandwich("ham", "cheese");
orderSandwich();

// Q 45 
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // allow any additional properties
}

function createCar(manufacturer: string, model: string, ...options: any[]): Car {
  const car: Car = { manufacturer, model };
  for (let i = 0; i < options.length; i += 2) {
    const key = options[i];
    const value = options[i + 1];
    car[key] = value;
  }
  return car;
}

const myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', 2022, 'sunroof', true);
console.log(myCar);





