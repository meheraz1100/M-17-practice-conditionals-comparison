/**
 * TERNARY --> three parts
 * ?    :  
 * 
 * condition ? do something when true   :    do something when false  
 */

const age = 20;



// normal if else
// if(age >= 18){
//     console.log("You can vote!");
// }
// else{
//     console.log("Ghumai Thako");
// }


// simple termary
// age >= 18 ? console.log('you can vote') : console.log('ghumai thako')


let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price + 100;
}
// console.log(price);

price = isLeader === true ? 0 : price + 100;

//OPTIONAL :semi-advance ternary

if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}

//TERNARY METHOD

price = isLeader === true ?
 price > 1000 ? 
 price / 2 : 0 : price + 1000;
