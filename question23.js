// Tests for equality and inequality with strings
let city = 'Islamabad';
let country = 'Pakistan';
console.log("Is city == 'Islamabad'? I predict True.");
console.log(city == 'Islamabad');
console.log("Is city != 'Islamabad'? I predict False.");
console.log(city != 'Islamabad');
console.log("Is country == 'Canada'? I predict False.");
console.log(country == 'Canada');
console.log("Is country != 'Pakistan'? I predict False.");
console.log(country != 'Pakistan');
// • Tests using the lower case function
let Name = 'AYESHA';
console.log("Is Name.toLowerCase() == 'ayesha'? I predict true.");
console.log(Name.toLowerCase() == 'ayesha');
console.log("Is Name.toLowerCase() == 'AYESHA'? I predict false.");
console.log(Name.toLowerCase() == 'AYESHA');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 25;
let height = 175;
console.log("Is age == 25? I predict True.");
console.log(age == 25);
console.log("Is age != 30? I predict True.");
console.log(age != 30);
console.log("Is height > 170? I predict True.");
console.log(height > 170);
console.log("Is height < 180? I predict True.");
console.log(height < 180);
console.log("Is age >= 25? I predict True.");
console.log(age >= 25);
console.log("Is height <= 175? I predict True.");
console.log(height <= 175);
console.log("Is age == 30? I predict False.");
console.log(age == 30);
console.log("Is height != 175? I predict False.");
console.log(height != 175);
console.log("Is age > 30? I predict False.");
console.log(age > 30);
console.log("Is height < 170? I predict False.");
console.log(height < 170);
// • Tests using "and" and "or" operators
let gender = 'girl';
let Age = 15;
console.log("Is gender ==  girl and age == 15? I predict True.");
console.log(gender == 'girl' && age == 15);
console.log("Is gender != girl and age == 15? I predict False.");
console.log(gender != 'girl' && age == 15);
console.log("Is gender ==  girl or age == 15? I predict True.");
console.log(gender == 'girl' || age == 15);
console.log("Is gender ==  boy or age == 14? I predict False.");
console.log(gender == 'boy' || age == 14);
// test weather an item in an array or not 
let fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana'));
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes('mango'));
console.log("Is 'kiwi' not in fruits? I predict True.");
console.log(!fruits.includes('kiwi'));
export {};
