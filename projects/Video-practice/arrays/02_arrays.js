const realHeros = ["Osman","Ertural","Orhan"]
const realLifeHeros =["Osman-e-Ghani","Umer-e-Farooq","Abu-Baker"]

realHeros.push(realLifeHeros)
const allHeros = realHeros.concat(realLifeHeros)


console.log(allHeros);


const inTeleHeros = ["Salman Khan","Shahruk Khan","Aamir Khan"]
const pkTeleHeros =["Humaiyu Saeed","Fahad Mustafa","Javed Sheik"]
inTeleHeros.push(pkTeleHeros)
const allTeleHeros = inTeleHeros.concat(pkTeleHeros)


console.log(allTeleHeros);

const richMan = ["Elon Musk","Mukesh Ambani","Mark Zurberge"]
const CruptMan = ["Nawaz Sharif","Doland Trump","Barik Obama"]

const richCrupt = richMan.concat(CruptMan)
console.log(richCrupt);

const allNewHeros = [...CruptMan,...richMan]
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5,6]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("shahameer"));
console.log(Array.from("shahameer"));
console.log(Array.from({name:"shahmeer"}));

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));


let primeMinisterHouse1 = 40000;
let primeMinisterHouse2 = 60000;
let primeMinisterHouse3 = 100000;

console.log(Array.of(primeMinisterHouse1,primeMinisterHouse2,primeMinisterHouse3));
