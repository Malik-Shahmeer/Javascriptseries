const tinderUser = {};

tinderUser.id = "12345"
tinderUser.name ="shahmeer"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const obj1 = {1:"a", 2 :"b"}
const obj2 = {3:"c", 4 :"d"}
const obj4 = {5:"e", 6 :"f"}

const obj3 = {...obj1,...obj2}
// console.log(obj3);


// const obj3 = {obj1,obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email:"shahmeer@gmail.com"
    },
    {
        id : 1,
        email:"shahmeer@gmail.com"
    },
    {
        id : 1,
        email:"shahmeer@gmail.com"
    }
]
users[1].name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('logged'));
// console.log(tinderUser.Object('isLoggedIn'));


const course = {
    coursename:"js in hindi",
    price :999,
    courseInstructor:"Muhammad Shahmeer"
}

const {courseInstructor : instructor} = course

// console.log(courseInstructor);

console.log(instructor);

