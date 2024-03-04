// object defniion

const person = {
    full_name : "Jolie Amadi",
    school: "Tech Bridge-city",
    course : "Backend Engineering",
    duration : "14"

}

console.log(person.full_name);


const statement = `My name is ${person.full_name} I am a student of ${person.school} and i am  studying ${person.course} which is a ${person.duration} weeks course`;
console.log(statement);

//  generate a cxomplex object housing a mixtrure of arrays and objects

const user = {
    name: 'John Doe',
    age : 30,
    hobbies : ['hiking', 'readig'],
    address : {
        street : '123 main St',
        city: 'Anytown',
        zip: '12345'
    },
    friends: [
        {name: 'Alice', age:30},
        {name: 'Bob', age: 32}
    ]

};

console.log(user.address.city);
console.log(user['address']['city']);
console.log(user.hobbies [1]);

console.log(user.friends[1].age);

// modifying arrays and objects

user.age = 40
user.fav_color = 'pink'
user.name ="Jane Doe"
user.friends[1].age = 34
 console.log(user);