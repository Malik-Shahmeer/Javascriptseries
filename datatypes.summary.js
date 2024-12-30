const isLoggedIn = false
const outsideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// Refrence (Non Primitive)

const heros = ["Osman Ghazi","Ertural Ghazi","Ameer Saada-din-Kopack"];
let myObj = {
    name :"shahmeer",
    age:18,
}

const myFunction = function(){
    console.log("Hello world");
      
}
// console.table(typeof anotherId);



// +++++++++++++++++++++++++++++++++


let myYoutubename = "karashah"

let anothername = myYoutubename
anothername = "krar123"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    bankId:"user@ubl"
}
let userTwo = userOne
userOne.email = "jdj@j"

console.log(userOne.email);
console.log(userTwo.email);

