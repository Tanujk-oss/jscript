// primitive datatypes 7: string, bigint, boolean, number, null, 
// undefined,symbol

const ac = 5678 // dynamically typed
const id = Symbol('1234')
const anotherID = Symbol('1234')

let name = undefined  
let name2     // undefined

const bigNumber = 12345459869849n  // BigInt

// non-primitive  (call by refrence)
// arrays, functions and objects

 const heroes =["superman", "batman", "spiderman"]
 
 const person = {
    name: "John",         //key value pair object
    age: 30
 }

 const myFunction = function() {
    console.log('Hello World')
 }

 console.log(typeof myFunction)  // function  
console.log(typeof heroes)// object
console.log(typeof anotherID)// symbol

// ***********************************************************************************
// stack (primitive), Heap (non-primitive)

let ytname = "HiteshChaudhary"
let anotherName = ytname  // copy of the value
anotherName = "ChaiAurCode"
console.log(ytname)  // HiteshChaudhary
console.log(anotherName)  //ChaiAurCode

let user = {
      name: "Hitesh",
      upi: "hitesh@ybl"
}

user2 = user
user2.name = "HiteshChaudhary"
console.log(user.name)  // HiteshChaudhary
console.log(user2.name) // HiteshChaudhary