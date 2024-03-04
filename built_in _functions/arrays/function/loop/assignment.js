

const teachers = [
    {
        username : "Victor",
        age : 30,
        email : "vic123@gmail.com"


    },

    {
        username : "Grace",
        age : 28, 
        email : "grace28@gmail.com"
    },

    {
        username : "Nathan",
        age : 40,
        email : "Nathan@gmail.com"

    }
]

function addAges(arr ) {
    let sum = 0
    arr.forEach(function(ele){
        sum = sum + ele.age
    });

    return sum
    
}
// const age = [30, 28, 40]
const sum_of_teachers = addAges(teachers)
console.log(sum_of_teachers);






// teachers.forEach((teacher) =>{
//     console.log(teacher.age );
// })

// let nums =[20, 30, 40];
// nums.forEach((n) => {
//     console.log(n);
// });
