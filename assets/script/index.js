                               //Assigments
// #1
// Write a function called isEven which checks if a number is even or odd.
// Hints: 0 if even and 1 is odd, for any number N, its evennes is the same as N-2
// Notice how this works when N is negative, try to fix it

let n = prompt("Enter any number");
function isEven(){
  if(n % 2){
    return "Odd"
  }else{
    return "Even"
  }
} console.log(isEven())

// #2
// Write a function called countBs that takes a string as its only arguments and returns
// a number that indicates how many uppercase "B" characters are in the string
// countBs("Bombastic") => 1
// countBs("bbbbBBBBonB") => 5

const str = prompt("Write => Haaland is wHell");
let count = 0;
let position = str.indexOf("H")
while (position !== -1) {
  count++;
  position = str.indexOf("H", position +1);
}
console.log(count)

// #3
// Write a function called CountChar that behaves like CountBs expect it takes a second 
// arguments that indicates the character that is to be counted
// conutChar("Car", "C") =>1
// countChar("capricious", "c") =>2

// let countChar = 'Haaland holds the ball with holly legs';
// function countChar(arg, Haaland)
// let posi = string.indexOf("l")

// #4
// Write the function to generate the first n fabonacci numbers
// ex 1 1 2 3 5
// let n = 5;

const fib = (n) => {
  if(n <= 1) {
    return n;
  }
  let prev = 0;
  let cur = 1;
  for(let i=2; i<=n; i++){
    let nex = prev + cur
    previous = cur
    current = nex
  }return current;
}
console.log(fib(10))

// #5
// Write a function range that takes 2 arguments 
// start and end and return an arrey containing 
// all the numbers from the start up to end
// range (1, 5) => [1, 2, 3, 4, 5]

const strin = []
function range(a, b){
  for(let i = a;  i <= b; i++){
    strin.push(i)
  }
return strin
}
console.log(range(1, 9))


// #6
// Write a stepRange that acts like ranges but takes an extra increment or decrement parameter
// stepRange (1, 10, 2) =>[1,3,5,7,9]
// stepRange (5, 1, -1) =>[5,4,3,2,1]



// #7
// combine both function into trueRange 
// trueRange(1, 5) =>[1,2,3,4,5]
// turRange(1, 10, 2) =>[1,3,5,7,9]
// trueRange(5, 2, -1) =>[5,4,3,2]

const trueRange = [1, 2, 3, 4, 5]
const truRange = [5, 4, 3]

trueRange.push(...truRange);
console.log(trueRange)

// #8
// Write a sum fuuction that take an array and returns the sum of its elements 
// sum([1,2,3,4,5]) => 15

let arr = [1, 2, 3, 4, 5]
let arrSum = arr.reduce((acc, curr) => acc + curr, 0)
console.log(arrSum)

// #9
// Write a function to return the average of an array
// average{[1,2,3,4,5,]} =>3

let array = [1, 2, 3, 4]
let arrAverage = array.reduce((acc, curr) => acc + curr, 0) / array.length
console.log(arrAverage)

// #10
// The == operator compares objects by identity. But sometimes you would 
// prefers to compare the values of their actual properties
// Write a function deepEqual that take 2 values and returns true if only 
// they are of the same value or are objects with the same property

function deepEqual(a, b) {
  if (a == b || a == b) {
    return true
  } else {
    return false
  }
}
console.log(deepEqual(6, 3))
