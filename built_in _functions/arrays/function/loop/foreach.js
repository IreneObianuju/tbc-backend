// Array.foreach(function (element, index){

// })

const  clubs = ["Real Madrid" , " Barcelon a" , "Bayern  Munich" , "PSG"];
clubs.forEach(function(club, index){
    console.log(club);
    // const statement = ` the index of${club} is ${index}`
    // console.log(statement);
})


// using for each, print a statment that reads "Buchi is 8 years old" from the given array below
const users = [
    {
        username: "Buchi ",
        age: 40,
        email: "nU9zB@example.com"
    },

    {
        username: "John",
        age: 30,
        email: "bUHt4@example.Com"

    },

    {
        username: "Jane",
        age: 28,
        email: "bUHt4@example.Com"

    }
]

users.forEach(function(user, index){
    // console.log(user);
    const statement = `${user.username} is ${user.age}`
    console.log(statement);
   
})


// create a foreach loop to iterate through a list of numbers and calculate their sum
function sumList(nums){
    let sum =0
    nums.forEach(function(num){
        sum = sum + num
    });
    return sum
}

// test the function 
const data = [2, 4, 7, 5];
const sum_of_nums= sumList(data);
console.log(sum_of_nums);

const balances = [1200, 350, 2300, 200];
const totalBalanbces = sumList(balances);
console.log(totalBalanbces);


