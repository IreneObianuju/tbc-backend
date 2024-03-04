let school_name = "Techbridge city"
let student_count = 20;
let statement = "This is "+school_name+" we have about "+student_count+" students"
console.log(statement);

const exp = "when will you come home";
const statement_exp = exp.replace("come", "go")
console.log(statement_exp);

// concatenation
console.log("Life is Good");

let name = "Irene"
let age =20;
let statement2 = "my name is "+name+" I am "+age+" years old";
console.log(statement2);

// string literals
const statement3 = `my name is ${name} I am ${age} years old`;
console.log(statement3);

// converting to strings
const num = 4000
console.log(4000);
const string_num = num.toString()
console.log(string_num);

const list = ["a", "b", "c"]
const string_list =list.toString()

// converting strings to numbers
//    convert strings to integer

let figure = "300"
figure = parseInt(figure)
console.log(figure+200);

let data ="300.5"
data = parseFloat(data)
console.log(data+10);

// assignment

function greeting(name = "HubSpot") {
    return `Hello ${name}`;
  }
  
  console.log(greeting());

  function greeting(name, message = "Welcome to HubSpot!") {
    return `Hello ${name}, ${message}`;
  }
  
  console.log(greeting("John"));
