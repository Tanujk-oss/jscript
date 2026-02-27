// primitive datatypes 7: string, bigint, boolean, number, null, 
// undefined,symbol

const ac = 5678 // dynamically typed
const id = symbol('1234')
const anotherID = symbol('1234')

let name = undefined  
let name     // undefined

const bigNumber = 12345459869849n  // BigInt

// non-primitive  (call by refrence)
// arrays, functions and objects

 const heroes = ['superman', 'batman', 'spiderman']
 
 const person = {
    name: 'John',         //key value pair object
    age: 30
 }

 const myFunction = function() {
    console.log('Hello World')
 }


 console.log(typeof myFunction)  // function  
console.log(typeof heroes)// object
console.log(typeof anotherID)// symbol