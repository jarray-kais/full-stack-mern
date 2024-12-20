// Problem 1 : Why did the code produce that output? If applicable, how would you get the index value that did not output?
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); // output : 'Tesla'
console.log(otherRandomCar); // output :'MERcedes'

//Why did the code produce this output? :
// the destruction syntax [x , y ] asssigns value to x and y in order of their indices in the array .
//skipping an index with a comma (',') allows you to access a specific index without assigning variables to their earlier indices
//How would you get the index value that did not output? ('Honda') :
//you can use destructuring with additionnal commas or directly access the index in the array
// const [, , thirdCar ] = cars
// console.log(thirdCar) ; //output : 'Honda'
// or
// const thirdCar = cars[2]
// console.log(thirdCar) ; // output : 'Honda'

//Problem 2 :  Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?
const employee = {
  employeeName: "Elon",
  age: 47,
  company: "Tesla",
};
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName); // Outputs: 'Elon'
//console.log(employeeName); // Error: ReferenceError: employeeName is not defined
// The variable otherName is created and assigned the value 'Elon' because of the renaming during destructuring.
// The variable employeeName is not defined in the current scope because destructuring does not create a variable named employeeName.
//How to Solve the Issue : const { employeeName, employeeName: otherName } = employee;console.log(employeeName); // Outputs: 'Elon'
//console.log(otherName);    // Outputs: 'Elon'

//Problem 3 : Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); // Outputs: '12345'
console.log(hashedPassword); // Outputs: undefined
//The destructuring const { password: hashedPassword } = person looks for a password property in the person object. Since it doesn't exist, hashedPassword is undefined.
// If you want hashedPassword to have a value without modifying the console.log statements, you can add a password property to the person object: const person = {
/*     name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: 'hashed12345' // Add this property
}; */

// Problem 4 : Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first === second); // Outputs: false
console.log(first === third); // Outputs: true

// first = 2 , second = 5 , third = 2
// const [,,, ,fourth] = numbers; // Destructure the 4th index
//console.log(fourth); // Outputs: 6

// Problem 5 : Why did the code produce that output? Console.log the last value in the secondKey property's array.

const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5
// Console.log the last value in the secondKey   :
//const [,,,,,lastvalue] = secondKey
//console.log(lastvalue )

//Problem 6 :  First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

/*  var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles); */
// Total Scopes: 3 : blobal scope - printNames functional scope - actuallyprintingNames functional scope
// outputs : Paul was found at index 0
//           George was found at index 1
//          John was found at index 2
//          Ringo was found at index 3
//          name and index after loop is Ringo:3

//Problem 7 : Why did the code produce that output?
function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + " was found at index " + index);
  }
  console.log("name and index after loop is " + name + ":" + index); // name is not defined
}

// name is declared with let (block scoped) : are accessible within the block {}

//Problem 8 : Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.
const beatles = ["Paul", "George", "John", "Ringo"];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + " was found at index " + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

// Output : Paul was found at index 0
//          George was found at index 1
//          John was found at index 2
//          Ringo was found at index 3
// No errors occur : Variables are correctly scoped (let and const ensure no leakage outside their intended blocks).
//                    The for loop and inner variables (index, name) behave as expected due to their block-scoping.

// Problem 9 : Why did the code produce that output? Explain why each console.log looks the way it does.

const planet = {
  name: "Jupiter",
  milesFromSun: 49849,
  mass: 393983,
  composition: ["gas", "liquid", "oxygen"],
};
const planetCopy = { ...planet };
console.log(planet.composition[0] === planetCopy.composition[0]); //outputs : true
console.log(planet === planetCopy);  // output : false

// planet.composition[0] and planetCopy.composition[0] both point to the same memory location because the composition array was shallow-copied.
// the spread operator creates a new object, planetCopy is a different object from planet (different memory locations).
//Even though the contents are the same (via shallow copy), planet and planetCopy are two distinct objects.
