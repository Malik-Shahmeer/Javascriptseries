let score = "33"

// console.log(typeof score);
// console.log(typeof (score));

let isLoggedIn = "shahmeer"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);


let youSignUp = 77
let stringSignUp = String(youSignUp)
// console.log(stringSignUp);
// console.log(typeof youSignUp);

let yourChatbot = "65"
let booleanIsSearching = Boolean(yourChatbot)
// console.log(booleanIsSearching);
// console.log(typeof yourChatbot);


function poundsToKg(pounds) {
    return pounds * 0.453592;
}


function kgToPounds(kg) {
    return kg / 0.453592;
}


let pounds = 150;
let kg = poundsToKg(pounds);
// console.log(`${pounds} pounds is ${kg} kg`);

kg = 68;
pounds = kgToPounds(kg);
// console.log(`${kg} kg is ${pounds} pounds`);

function pkrToUsd (pkr, rate){
    return pkr * rate;
}

function usdToPkr(usd, rate){
return usd / rate
}
let usd = 1;
let rate = 0.792;
let pkr = usdToPkr(usd, rate)
console.log(`${usd} USD is approximately ${pkr} PKR`);


pkr = 1;
rate = 277;
usd = usdToPkr(pkr,rate);
console.log(`${pkr} PKR is approximately ${usd} USD`);

// +++++++++++++++++operation++++++++++++++++++

let value = 3
let negValue = -value
console.log(negValue   );




