console.log(typeof number);
console.log(typeof bigInt);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof symbol);









// let score = "shahmeer"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let isLoggedIn = "shahmeer"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************* Operations *******************************************************************************************************

// let value = 3
// let negValue = -value
// console.log(negValue);

//  let str1 = "hello"
//  let str2 = "shahmeer"

//  let str3 = str1 + str2
//  console.log(str3)

// video 9
// const outsideTempo = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);

// const bigNumber = 32419341843918n

// refrence (non primitive)

// Array,objects,functions

// const heros = ["Ertural Ghazi","Osman Ghazi","sultan Muhammad Fathi"];
// let myObj = {
//     name:"shahmeer",
//     age:18.
// }

// const myFunction = function(){
//     console.log("hello world");
// }
// console.log(typeof heros);

// video no 10

// let myYoutubename = "hiteshchoudharydotcom"
// let anothername = myYoutubename
// anothername = "chaiaurcode"

// console.log(anothername);
// console.log(myYoutubename);

// let userOne = {
//     email: "user@google.com",
//     jazzcash:"user@ybl"
// }
// let userTwo = userOne

// userTwo.email = "shahmeer@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);

// video no 11
// const name = "shahmeer"
// const repoCount = 50
// console.log(`Hello my name is ${name} and my repo count is ${50}`);

// const gameName = new String('shahmeer')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// video no 12

const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().lenght);
// console.log(balance.toFixed(1));

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(4));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4,5,6,7));
// console.log(Math.max(4,5,6,7));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log((Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.floor(Math.random()*(max - min + 1))))

// video no 13

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2024, 0, 13, 4, 5)
let myCreatedDate = new Date("2024-05-12")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth())

// newDate.toLocaleString('default' , {
//     weekday:"long"
// })


// video no 14

// Array

const myArr = [0, 1, 2, 4, 5]
const myHeros = ["OsmanGhazi" ,"ErturalGhazi"]
// console.log(myArr[1])


// Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
 

// console.log(myArr);
// console.log(newArr);

// console.log("A" , myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);



// const myn2 = myArr.splice(1, 3)
// console.log("C" , myArr);
// console.log(myn2);

// video no 15

const marval_heros =["thor" , "ironman", "spiderman"]
const dc_heros = ["superman" , "flash" ," batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);

//  const all_new_heros = [...marval_heros, ...dc_heros]

//  console.log(all_new_heros);

// const another_array = [1 ,2 ,3 ,[4, 5, 6,],7 ,[6, ,7 [4, 5]]]

// const real_another_array = another_array.flat(infinity)
// console.log(real_another_array);

// console.log(Array.isArray("shahmeer"));
// console.log(Array.from("shahmeer"));

// video mo 16

const jsUser = {
    name:"shahmeer",
    age:18,
    location:"Karachi",
    email:"shahmeer@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsUser)

// video no 17


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// video 18
// video 19
// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumber(3, 4)

// function loginUserMessage(username = "sam"){
// if(!username){
//     console.log("Please enter a username");
//     return
// }
//     return`${username}just logged in`
// }

// console.log(loginUserMessage("shahmeer"))
// console.log(loginUserMessage("shahmeer"));
// 
// video 30

const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach((item)=>{
    // console.assertlog(item);
})
// console.log(values);

// const myNums = [1,2,3,4,5,6,7]
// const newNums = myNums.filter((num)=>num > 4)
// console.log(newNums);
// const newNums =[]
// myNums.forEach((num)=>{
//     if (num)
// })

// video 20 

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400,500));
// const user = {
//     username : "shahmeer",
//     price: 199

// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username}and price${anyobject.price}`);
// }

// video no 21

// if (true){let a = 10
// const b = 20
// varc = 30}

// console.log(b);
// video no 22

// function one(){
//     const username = "hitesh"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
// }


//  function addone(num){
//     return num + 1
//  }

//  addone(5)

//  const addTwo = function(num){
//  return num +2}
// addTwo 


// hello = function(){
//     return "Hello World";
// }
// console.log("hello");

// const add = (a, b) => a + b;
// console.log(add(2, 3));

// const subract = (a, b) => a - b;
// console.log(subract(5, 20));

// const multiply = (a, b)=> a* b;
// console.log(multiply(4, 7));

// const divid = (a, b) => a / b;
// console.log(divid(5, 2));



// const car = {
//      make:"Toyota",
//      model:"cmery",
//      color:"yellow",
//      year:"2021",

//     startEngin:function(){
//         console.log("The engin has started");
// }};

// car.color = "red";
// console.log(car);






















