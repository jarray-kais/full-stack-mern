//problem 1 :
const Older = x => x >18 ? "You are good to go!" : "Sorry! You must be 18 or older!" 

console.log(Older(10))  //output : Sorry! You must be 18 or older!
console.log(Older(20))  //output : You are good to go!

// problem 2 :
const raining = x => x === "raining" ? "Get your rain jacket!" : "No rain on today's forecast!"

console.log(raining("sunny"))  //output : No rain on today's forecast!
console.log(raining("raining"))  //output : Get your rain jacket!

// problem 3 :
const even = x => x%2 === 0 ? "That's an even number!" : "That's an odd number!"

console.log(even(10))  //output : That's an even number!
console.log(even(11))  //output : That's an odd number!

// problem 4 :
const great = (x , y) => x > y ? `${x} is more than ${y} !` :`${x} is less than ${y} !`

console.log(great(10, 5)) //output : 10 is more than 5 !
console.log(great(5, 15))  //output : 5 is less than 15!




