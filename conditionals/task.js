
// //  loop through an array of nums and print only the even using forEach loop

// // const nums = [24, 36, 45, 61, 102, 205, 326 ]
// // nums.forEach((num)=>{

// //     if (num % 2 === 0){
// //         console.log(num);
// //     }

// // })

// // const numbers = [1,2,3,4,5,6,7,8,9,10];
// // // filter
// // const getEvenNumbers = (num)=> {
// //     return num % 2 ===0
// // }

// // const evenNumbers = numbers.filter(getEvenNumbers)
// // console.log(evenNumbers);

// // const firtEvebNo =numbers.find(getEvenNumbers);
// // console.log(firtEvebNo);

// // const reversedNumbers =numbers.reverse()
// //     console.log(reversedNumbers);


// // const fruits =["Guava", "Mango", "Orange", "Lemon", "Pineapple"];
// // const sortedFruits =fruits.sort()
// // console.log(sortedFruits);
// // const reversedFruits = sortedFruits.reverse()
// // console.log(reversedFruits);


// let users = [
//     {
//         username : "Nathaniel",
//         age : 21,
//         hobby : "Reading"
//     },

//     {
//         username : "Nick",
//         age : 17,
//         hobby : "Dancing"


//     },

//     {
//         username : "Victory",
//         age : 15,
//         hobby : "Skipping"


//     },

//     {
//         username : "James",
//         age : 18,
//         hobby : "Dancing"


//     }
// ]


// let filteredUsers = users.filter((user) => {
//     return user.age <18;
// });

// console.log(filteredUsers)
    

// const agesBelow18 = users.filter(user => user.age < 18);
// console.log(agesBelow18);


// function findUsersBelow18(user){
//     return user.age <18

// }
// const age =users.filter(findUsersBelow18)
// console.log(age);



   





// const teachers = ['Nathan','Ivan', 'Irene', 'Nick'];


// function findIrene(item) {
//     return item ==='Irene';
// }

// const retrieve = teachers.find(findIrene)
// console.log(retrieve);


// const crops = [
//     {
//         name: "wheat",
//         maturity_time: 10,
//         price_per_bag: 100,
//         family: "Cereal",
//         growth_time: 90
//     },
//     {
//         name: "rice",
//         maturity_time: 15,
//         price_per_bag: 200,
//         family: "Cereal",
//         growth_time: 30
//     },
//     {
//         name: "corn",
//         maturity_time: 20,
//         price_per_bag: 300,
//         family: "Cereal",
//         growth_time: 60

//     },
//     {
//         name: "beans",
//         maturity_time: 25,
//         price_per_bag: 400,
//         family: "Legumes",
//         growth_time: 90

//     },
//     {
//         name: "peas",
//         maturity_time: 30,
//         price_per_bag: 500,
//         family: "Legumes",
//         growth_time: 120
//     },
//     {
//         name: "carrots",
//         maturity_time: 35,
//         price_per_bag: 600,
//         family: "Vegetables",
//         growth_time: 150
//     }

// ];

// // 1. retrieve all crops that matures in less than 20 days
// // 2  retrieve all crops that grow in less than 90 days
// // 3. retrieve all crops that growS and matures in less than 120 days
// // 4. retrieve all crops that grows in more than 150 days
// // 5. retrieve all crops that sells from 400 per bag and above
// // 6. retrive all crops that grows and matures in more than 90days


// const maturesLessThan20 = (crop) => {
//     return crop.maturity_time < 20;
// }

// const crops_that_matures_in_less_than_20 = crops.filter(maturesLessThan20);
// console.log(crops_that_matures_in_less_than_20);


// const growsLessThan90 = (crop)=> {
//     return crop.growth_time < 90;
// }

// const crops_that_grow_in_less_than_90 = crops.filter (growsLessThan90)
// console.log(crops_that_grow_in_less_than_90);

// const growsAndMaturesLessThan120 =(crop)=>{
//     return crop.growth_time < 120 && crop.maturity_time<120;
// }

// const crops_that_grows_and_matures_in_less_than120 =crops.filter (growsAndMaturesLessThan120)
// console.log(crops_that_grows_and_matures_in_less_than120);

// const growsMoreThan150 = (crop)=> {
//     return crop.growth_time > 150;
// }

// const crops_that_grow_in_more_than_150 = crops.filter (growsMoreThan150)
// console.log(crops_that_grow_in_more_than_150);

// const sellsFrom400AndAbove =(crop)=> {
//     return crop.price_per_bag >= 400;
// }

// const crops_that_sell_for_400_and_above =crops.filter(sellsFrom400AndAbove)
// console.log(crops_that_sell_for_400_and_above);












   
    
     
   

    





