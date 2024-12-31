// Object Literal
// let jsUser ={
//     name :"shahmeer",
//     fullname : "Muhammad Shahmeer",
//     age :"18",
//     location : "ManoraIeland",
//     email : "muhammadshahmeer4@google.com",
//     isLoggedIn : "false",
//     lastLoginDays:["saturday","Monday"]
// }


// console.table(jsUser["name"])
// console.table(jsUser["fullname"])
// console.table(jsUser["age"])
// console.table(jsUser["location"])
// console.table(jsUser["email"])
// console.table(jsUser["isloggedIn"])
// console.table(jsUser["lastLoginDays"]);

// jsUser.greeting = function(){
//     console.log("Hello Js User");
// }
// jsUser.greetingTwo = function(){
//     console.log(`Hello Js User,${this.fullname}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());



let jsUser ={
    Name :"Sheheryar",
    fullname : "Muhammad Sheheryar",
    Age :"21 Year Old",
    Location : "Kharader",
    Email: "karasheheryar@gmail.com",
    isLoggedIn : "True",
    lastLoginDays:["Saturday","Wednesday"]
}
jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.fullname}`);
}
jsUser.greetingThree = function(){
    console.log(`Hello Js user Your Place,${this.Location}`);
}
jsUser.greetingFour = function(){
    console.log(`Hello Js user Your Age,${this.Age}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser.greetingThree());
console.log(jsUser.greetingFour());