function greet(){
    console.log("Welcome Irene");
}

greet();

function greetByName(username){
    console.log(`Welcome ${username}`);
}

greetByName("Peter")

// Generate 3 examples on function definition

function greetByTimeAndName(username, time_of_day){
    console.log(`Good ${time_of_day} to you ${username}`);
}

greetByTimeAndName("james","afternoon")


const char = "Melchizedech"
console.log(char.length);
const numbers = [22, 45, 9 -1]
console.log(numbers.length);


function addTwoNumbers (num1, num2){
    const sum =num1 + num2;
    return sum
}

const result = addTwoNumbers(4, 6)

console.log(result);


function firstTwoEle(arr){
    const sum = arr[0] +arr[1]
    return sum
}

const testArray = [3,4, 5, 6];

const ans =firstTwoEle(testArray);
console.log(ans);

function thirdEle(arr){
    const result = arr[2]
    return result
}

const testArr =[1, 2, 3, 4];

const input =thirdEle(testArr);

console.log(input);


function greetByNameAndTime(username, time_of_day ="morning"){

    console.log(`Good ${time_of_day} to you ${username}`);
}

greetByNameAndTime ("james")
greetByNameAndTime ("james", "afternoon")

// function greet( name) {
//     console.log('Hello' + ${name} );
    
// }

// greet('Nathan')