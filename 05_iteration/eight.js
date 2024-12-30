const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc, currval){
    // console.log(`acc:${acc} and currval`);
    // return acc + currval
    
},2)
console.log(myTotal);


let myTotal2 = myNums.reduce((acc, curr)=> acc+curr, 0)
console.log(myTotal);


const shoppingCart =[
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 3999
    },
    {
        itemName: "Mobile dev Course",
        price: 999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.
price, 0)
console.log(priceToPay);
































