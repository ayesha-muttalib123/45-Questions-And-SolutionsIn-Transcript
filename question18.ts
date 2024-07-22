let cities: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Cairo"];


console.log("Original order:", cities);

// Print the array in alphabetical order without modifying the actual list
let sorted = cities.sort();
console.log("Alphabetical order:", sorted);

// Show that the array is still in its original order
console.log("Still original order:", cities);

// Print the array in reverse alphabetical order without changing the order of the original list
let reverseSorted = cities.sort().reverse();
console.log("Reverse order:", reverseSorted);

// Show that the array is still in its original order
console.log("Still original order:", cities);

// Reverse the order of the list
cities.reverse();
console.log("Reversed order:", cities);

// Reverse the order of the list again
cities.reverse();
console.log("Back to original order:", cities);

// Sort the array so it’s stored in alphabetical order
cities.sort();
console.log("Alphabetical order stored:", cities);

// Sort to change the array so it’s stored in reverse alphabetical order
cities.sort().reverse();
console.log("Reverse alphabetical order stored:",cities);
