//grade system practice

let math = prompt("Enter you math number : ");
let physics = prompt("Enter Your Physics Number : ");
let chemistry = prompt("Enter Your Chemistry : ");
let bangla = prompt("Enter Your Bangla Number : ");
let english = prompt("Enter Your English Number : ");

//parse int
let mathint = parseInt(math);
let phhysicsint = parseInt(physics);
let chemistryInt = parseInt(chemistry);
let banglaint = parseInt(bangla);
let englishint = parseInt(english);


// console.log("Your Total mark is : " + mathint + phhysicsint + chemistryInt + banglaint + englishint);


// math
if(math >= 80 && math < 101){
    console.log("You got A+ : " + mathint);
}

else if(math == ""){
    console.log("May be you forget to give a value!")
}
else{
    console.log("Please keep your number in range!");
}



// physics
if(phhysicsint >= 80 && phhysicsint < 101){
    console.log("You got A+ : " + phhysicsint);
}
else if(phhysicsint == ""){
    console.log("May be you forget to give a value!")
}
else{
    console.log("Please keep your number in range!");
}





// chemistry
if(chemistryInt >= 80 && chemistryInt < 101){
    console.log("You got A+ : " + chemistryInt);
}
else if(chemistryInt == ""){
    console.log("May be you forget to give a value!")
}
else{
    console.log("Please keep your number in range!");
}





// bangla
if(banglaint >= 80 && banglaint < 101){
    console.log("You got A+ : " + banglaint);
}
else if(banglaint == ""){
    console.log("May be you forget to give a value!")
}
else{
    console.log("Please keep your number in range!");
}





// english
if(englishint >= 80 && englishint < 101){
    console.log("You got A+ : " + englishint);
}
else if(englishint == ""){
    console.log("May be you forget to give a value!")
}
else{
    console.log("Please keep your number in range!");
}


