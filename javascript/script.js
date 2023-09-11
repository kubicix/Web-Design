// console.log("Welcome")
// console.log(123)
// console.error("There was an error")
// alert("Welcome to website");

// console.clear()

// Variables

// var password;
// console.log(password)

// password = "kubilaybrr"
// console.log(password)

// age = 22;
// console.log(age)

// // variable declaring rules


// // cannot start with numbers

// age1=31;

// // we cant use command names as variable names

// var if1;

// // we cant use spacing in variables
// // instead we use camelcase or underline or snakecase
// // we shouldnt use special characters for ex turkish letters like ü,i,ş,ö..
// var ad_soyad;
// var adSoyad;
// adSoyad="Kubilay Birer"
// console.log(adSoyad)

// const email= "12345@gmail.com";
// console.log(email)

// email = "56789@gmail.com"
// console.log(email)

// Variable Types

// Primitive Types

// String

let firstName="Kubi";
console.log(firstName)
console.log(typeof(firstName))

// Number

let age = 31;
console.log(age)
console.log(typeof(age))

// Boolean (logical)

let credit_isused=false
console.log(credit_isused)
console.log(typeof(credit_isused))

// Undefined 

let phone;
console.log(phone)
console.log(typeof(phone))

// Reference Types : Objects

    //Array

    let list = ["Aslı","Serker","Keroş"]
    console.log(list)
    console.log(typeof(list))

    //Object Literals

    let adress = {
        city:"İstanbul",
        country:"Türkiye",
    }
    console.log(adress)
    console.log(typeof(adress))

// Funcitons

var calculate = function(){
    return 10;
}
console.log(calculate)
console.log(typeof(calculate))

// Mathematical operators
//a20 b10 c5 d3
let data;
const a=20;
const b=10;
const c=5;
let d=3;

data = a+b;
data=a-b;
data=a*b;
data=a/b;

// Assignment operators

data=a;
data+=a; // data = data+a
data-=a; // data = data-a
data*=a; // data = data*a
data/=a; // data = data/a
data%=a; // data = data%a

// Comparison operators
//a20 b10 c5 d3

data = a==b;  // are they equal
data = b==c;  // are they equal
data = 5=="5";  // are they equal yes because they are same
data = 5==="5";  // are they equal no because types aren't the same
data = a!=b;  // a is not equal to b is true
data = a!==b;  // a not is equal to b 

// Logical operators
//a20 b10 c5 d3

// && and
data = (a>b) && (a>c)
// || or
data = (b>a) || (c>a)
// ! not
data=!(a<b)





console.log(data);
console.log(typeof(data));
