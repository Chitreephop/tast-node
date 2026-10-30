/*var name;
name = "John Doe";
var age = 30;
var isStudent = true;
console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);*/

/*const student = {
  name: "Jane Smith",
  age: 22,
}
student.age = 23;
student.name = "jen";
console.log(`Student Name: ${student.name}, Age: ${student.age}`);
if (student.age > 18) {
  console.log("You are an adult.");
}else {
    console.log("You are a minor.");
}
console.log(`${student.age > 18 ? "You are an adult." : "You are a minor."}`);
function HelloWorld() {
  console.log("Hello, World!");
}
HelloWorld();
*/
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

function introduce(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
    //console.log(`My name is ${name} and I am ${age} years old.`);
}
//introduce("Bob", "25");
console.log(introduce("Alice", "25"));

function Circumference (radius) {
    return 2* Math.PI * radius;
}
const Circumference = (radius) => 2* Math.PI * radius;
//console.log(`Circumference: = ${Circumference(5)}`);