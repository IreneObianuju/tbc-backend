let students = ["John", "Jane", "Mark"];
for (let a =0; a < 3; a ++){
    console.log(students[a]);


}

    
    // write a loop to print the data types of each element of an array
    const data =["irene", 26, 54, ["singing", "reading"], true];
    for (let e = 0; e < data.length; e++){
        // console.log(typeof data[e]);
        const dataType =typeof data[e];//get data type
        const statement = `${data[e]} is an ${dataType}`//make statement
        console.log(statement);
    }

    // WRITE A LOOP TO PRINT NAME OF EVERY TEACHER IN THE ARRAY BELOW
const teachers = [
    {
        name: "Irene",
        age: 26,
        height: 5.4,
    },
    {
        name: "John",
        age: 30,
        height: 5.8
    }, 
    {
        name: "Jane",
        age: 28,
        height: 6
    }
]

for (let i = 0; i< teachers.length; i++){
    // console.log(teachers[i]);
    const teacher= teachers[i]
    console.log(teacher.name);
    // const teachersName =["Irene", "John", "Jane"]
    // const statement =`  ${teachersName}`
    // console.log(statement);
}



for (let h =15; h > 8; h--){
    console.log(h);
}

for (let p =3; p <13; p++){
    console.log(p);
}

const username = "irene"
for (let i =0; i <username.length; i++){
    console.log(username[i]);
}
