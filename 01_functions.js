function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3, 4)

// console.log("Result :", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter the user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("shahmeer"));
 
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));
 
const user = {
    username: "shahmeer",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject({
    username: "sam",
    price:399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

                                // practice mode

const myValue =[300, 400, 500, 600, 700]

function returnCustumValue(getTheValue){
    return getTheValue[0]
}
// console.log(returnCustumValue(myValue));
// console.log(returnCustumValue([300, 400, 500, 600, 700]));


function whatObject(objectPerson){
    // console.log(`username is ${objectPerson.username} and price is ${objectPerson.price}`);
    }

whatObject({
    username: "shahmeer",
    price: "400"
})    

function newperson(noObject){
    // console.log(`Newperson name is ${noObject.personname}.He live in India and He Want the Beautiful ${noObject.car} with wife and Wife name is ${noObject.wife}.  `);
    
}
newperson({
    personname:"Rakash",
    car:"Lambergini",
    wife:"shahmeta"})


function newMovierelease(filmperosn){
    console.log(`new movie released for ${filmperosn.hero} and production name is ${filmperosn.productionCity} and all people looking that.
         Five heros first name ${filmperosn.first} second name ${filmperosn.second} 
         third name ${filmperosn.third} and forth name ${filmperosn.forth} and 
         Fifth name is ${filmperosn.fifht} and Flim heroin name is ${filmperosn.heroin} 
         and Film rating is ${filmperosn.filmRating}.`);
    }
newMovierelease({
    hero:"Ajay Devgan",
    productionCity:"Rohit Shetty Film production",
    first:"Ajay Devgen",
    second:"Ranveer Singh",
    third:"Tiger Sharoff",
    forth:"Akshey Kumar",
    fifht:"peryanka Chopra",
    heroin:"karina kapoor",
    filmRating:"10/3.7"
})
