// write a function that tells 

// const isEvenOrOdd =(num)=>{
//     if (num % 2 === 0){
//         return 'even'
//     }
//     else{
//         return 'odd'
//     }
// }
//  console.log(isEvenOrOdd(61));

 const user = {
    username: "Irene",
    fav_food:"Rice",
    eats_meat: true
 }

 if (user.eats_meat ===true){
    console.log("carnivore");
    
 }else{
    console.log("veggie");
 }



/*write a function that accepts the age of applicants for the office of the president.

if the candidate is 35 years and above, it prints qualified
if the candidate is below 35 but up to 25, it would advise the candidate to run for a lower office
if he candiodate is less than 25, it should return 'not qualified' 
*/


const screenByName =(age)=>{
    if (age >=35){
        console.log('Qualified!!!');
    }
    else if (age <35 && age>= 25) {
        console.log('oops!! Try another office');
    }
    else {
        console.log('Not Qualified!!');
    }
}
screenByName(35)



// write a code that checks if a year is a leap year


function checkLeapYear(year) {
    if (year % 4 ===0){
        return 'this is a leap year'
    }
    else {
        return 'this is not a leap year'
    }
   

    
}
console.log(checkLeapYear(2024));


// switch conditionals
// const pet = "dog";
 
// switch (pet) {
//   case "lizard":
//     console.log("I own a lizard");
//     break;
//   case "dog":
//     console.log("I own a dog");
//     break;
//   case "cat":
//     console.log("I own a cat");
//     break;
//   case "snake":
//     console.log("I own a snake");
//     break;
//   case "parrot":
//     console.log("I own a parrot");
//     break;
//   default:
//     console.log("I don't own a pet");
//     break;
// }


// if, else if and else conditionals
const pet = "dog";

if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}
    
// The logical NOT (!) operator
const ireneIsAGirl = true
const herAgeIs20 = false

if (!ireneIsAGirl || herAgeIs20){
    console.log('she is a grown up');
}else{
    console.log('she is a child');
}

// The logical OR (||) operator
const adaIsAGirl = true
const herColorIsBlue = false

if (adaIsAGirl || herColorIsBlue){
    console.log('she is Qualified');
}else{
    console.log('she is not Qualfied');
}

// ternary conditions
const age = 32;
const citizen = age >= 18 ? "Can vote" : "Cannot vote";
console.log(citizen);