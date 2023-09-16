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

// let firstName="Kubi";
// console.log(firstName)
// console.log(typeof(firstName))

// // Number

// let age = 31;
// console.log(age)
// console.log(typeof(age))

// // Boolean (logical)

// let credit_isused=false
// console.log(credit_isused)
// console.log(typeof(credit_isused))

// // Undefined 

// let phone;
// console.log(phone)
// console.log(typeof(phone))

// // Reference Types : Objects

//     //Array

//     let list = ["Aslı","Serker","Keroş"]
//     console.log(list)
//     console.log(typeof(list))

//     //Object Literals

//     let adress = {
//         city:"İstanbul",
//         country:"Türkiye",
//     }
//     console.log(adress)
//     console.log(typeof(adress))

// // Funcitons

// var calculate = function(){
//     return 10;
// }
// console.log(calculate)
// console.log(typeof(calculate))

// // Mathematical operators
// //a20 b10 c5 d3
// let data;
// const a=20;
// const b=10;
// const c=5;
// let d=3;

// data = a+b;
// data=a-b;
// data=a*b;
// data=a/b;

// // Assignment operators

// data=a;
// data+=a; // data = data+a
// data-=a; // data = data-a
// data*=a; // data = data*a
// data/=a; // data = data/a
// data%=a; // data = data%a

// // Comparison operators
// //a20 b10 c5 d3

// data = a==b;  // are they equal
// data = b==c;  // are they equal
// data = 5=="5";  // are they equal yes because they are same
// data = 5==="5";  // are they equal no because types aren't the same
// data = a!=b;  // a is not equal to b is true
// data = a!==b;  // a not is equal to b 

// // Logical operators
// //a20 b10 c5 d3

// // && and
// data = (a>b) && (a>c)
// // || or
// data = (b>a) || (c>a)
// // ! not
// data=!(a<b)

// console.log(data);
// console.log(typeof(data));

// DATE OBJECT

// let time = new Date();
// let birthday= new Date(2001,7,10);

// // Set Methods
// time.setDate(25);
// time.setMonth(3);
// // time.setFullYear(2013);

// // Get Methods
// console.log(time.getMonth()+1)
// console.log(time.getDate())
// console.log(time.getFullYear())
// console.log(time.getDay())
// console.log(time.getHours())
// console.log(time.getMinutes())
// console.log(time.getSeconds())
// console.log(time.getMilliseconds())



// console.log(time);
// console.log(typeof(time));

// console.log("your age=",time.getFullYear()-birthday.getFullYear());

// NUMBERS
// let veri;

// veri=Number("5");
// veri=parseInt("5");
// veri=parseFloat("5.1");
// veri=isNaN("c5")
// veri=isNaN("5")

// var sayi=15.43563453;

// veri=sayi.toPrecision(5);
// veri=sayi.toFixed(6);

// veri=Math.PI;
// veri=Math.round(3.2);
// veri=Math.round(3.5);
// veri=Math.ceil(3.2); // always up
// veri=Math.floor(8.3); // alwayd down
// veri=Math.pow(3,3);
// veri=Math.sqrt(81);
// veri=Math.abs(-99);
// veri=Math.min(1,4,5,2,1,4,2,1,31,42,-2);
// veri=Math.max(1,4,5,2,1,4,2,1,31,42,-2);
// veri=Math.floor(Math.random()*100);


// console.log(veri);
// console.log(typeof(veri));

// STRINGS

// const firstname="Kubilay";
// const lastname="Birer";
// const age="22";
// let hobbies="futbol oyun dizi film fitness";

// let veri;

// // string concatenations

// veri=firstname+" "+lastname;
// veri="Kubilay";
// veri+=" Birer"

// veri='My name is '+firstname+' '+lastname+' my age is '+age+'and im living in İstanbul\'da '

// veri=firstname.concat(" ",lastname)

// veri=veri.toUpperCase();
// veri=veri.toLowerCase();

// // veri=veri.substring(2,11);
// // veri=veri.slice(0,8);

// // veri=veri.indexOf("k");

// // veri=veri.replace("kubilay","Teoman")

// // veri=veri.length;

// veri=hobbies.split(" ")


// console.log(veri);
// console.log(typeof(veri));

// ARRAYS 

// let names = ["asy","kubi","ereş","fıstık"];
// let years =[2002,2001,2008,2020]
// let mix =["arda","güler",2004,null,undefined,["programlama","futbol"]];

// console.log(names);
// console.log(names.length)
// console.log(typeof(names));

// console.log(years);
// console.log(mix);

// // getting exact array items

// console.log(names[0]);

// // setting array item

// names[0]="asycan";
// console.log(names);
// names[4]="kwiş";

// // adding item to array

// names.push("bademsu");
// names.unshift("pilav");

// // removing item from array using methods

// // years.pop();
// // console.log((years));

// years.shift();
// console.log((years));

// // indexOf searching method

// let index=names.indexOf("ereş");
// console.log(index)

// // reversing an array

// names.reverse();
// console.log(names);

// years.sort();
// console.log(years);

// // merging arrays

// let veri = names.concat(years);
// console.log(veri);

// names.splice(2,0,"pilavcan");
// console.log(names);

// names.splice(2,1,"pkero");
// console.log(names);

// IF-ELSE conditions

// const firstName="Çağla";
// const userName="caglayilmaz";
// const age=20;
// const isStudent=true;
// const school="university";

// if(userName == "caglayilmaz"){
//     console.log("Merhaba Çağla");
// }
// else{
//     console.log("Kullanıcı bulunamadı");
// }

// if(age === 20){
//     console.log("Yaşınız 20");
// }

// if(isStudent){
//     console.log("Hangi bölümde okuyorsunuz?");
// }
// else{
//     console.log("Mesleğiniz nedir?");
// }

// if(age >= 18){
//     if(school=="university"){
//         console.log("Ehliyet alabilirsiniz");
        
//     }
//     else{
//         console.log("Eğitim durumu yetersiz alamazsınız");
//     }
// }
// else{
//     console.log("Yaşınız ehliyet için yetersiz");
// }

// let id="23232322"
// if(typeof id != "undefined"){
//     console.log("id: "+ id);
// }
// else{
//     console.log("no id")
// }

// Switch koşul yapısı

// let islem=4;

// switch(islem){
//     case 1:
//         console.log("1 nolu işlem yapıldı")
//         break;
//     case 2:
//         console.log("2 nolu işlem yapıldı")
//         break;
//     case 3:
//         console.log("3 nolu işlem yapıldı")
//         break;
//     default:
//         console.log("İşlem yapılmadı")
    
    
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day="Pazar";
//         break
//     case 1:
//         day="Pazartesi";
//         break
//     case 2:
//         day="Salı";
//         break
//     case 3:
//         day="Çarşamba";
//         break
//     case 4:
//         day="Perşembe";
//         break
//     case 5:
//         day="Cuma";
//         break
//     case 6:
//         day="Cumartesi";
//         break
// }

// console.log(day);

// let hour=8;

// switch(true){
//     case (hour >=6 && hour<=12):
//         console.log("Günaydın");
//         break
//     case (hour >=13 && hour<=17):
//         console.log("İyi Günler");
//         break
//     case (hour >=18 && hour<=24):
//         console.log("İyi Akşamlar");
//         break
// }


// Object Literals

// let firstName="Kubilay";
// let lastName="Birer";

// let kubi = ["Kubilay","Birer",22,];
// let esma = ["Esma","Koray",40];

// Object Literals - JSON
// let data ={
//     userName : "kubicix",
//     firstName : "Kubilay",
//     lastName : "Birer",
//     age : 22,
//     hobbies : ["futbol","yazılım","fitness"],
//     address :{
//         city:"İstanbul",
//         country : "Türkiye",
//         phone : "050000000",
//     }
// }

// veri=data;
// veri=data.firstName;
// veri=data.lastName;
// veri=data.hobbies;
// veri=data.hobbies.length;
// veri=data.address.city;
// veri=data.address.phone;

// console.log(veri)
// console.log(typeof(veri))

// While loop

// let i = 0;

// while (i<10){ // infinite loop
//     console.log(i);
//     i++; //i+=1
// }

// let i = 10;


// while(i>0){
//     console.log(i);
//     i--;
// }

// break and continue 

// let i =0;

// while(i<10){
//     console.log(i);
//     if(i==6){
//         break;
//     }
//     i++;
// }

// let i = 0;

// while(i<10){
    
//     i++
//     if(i==3){
//         continue;
//     }
//     console.log(i)
    
// }

// do while loop

// do{
//     console.log(i)
//     i++;
// }while(i<10)

// for loop

// for (let i=0;i<10;i++){
//     console.log(i)
// }

// for (let i=0;i<10;i++){
//     if(i==3){
//         console.log("seçilen rakam: "+i)
//         continue
//     }
//     console.log(i)
// }

// let toplam=0;

// for(let i=1;i<10;i++){
//     toplam+=i;
// }
// console.log(toplam)

// let sonuc = 1;

// for(let i =1;i<10;i++){
//     sonuc*=i;
// }

// console.log(sonuc)

// Using loops in array and objects

let citys=["istanbul","Kocaeli","İzmir","Eskişehir","Edirne"];

let users=[
    {firstName:"Asya",lastName:"Mort"},
    {firstName:"Kubi",lastName:"Grimes"},
    {firstName:"Eren",lastName:"Yaegar"},
    {firstName:"Fıstık",lastName:"Hammy"},
]

// Arrays

// for(let i =0;i<citys.length;i++){
//     console.log(citys[i]);
// }

// for-in method

// for(let i in citys){
//     console.log(`${i}. ${citys[i]}`); // index number is printed out as well, we can use this way too but it
// }

// for-each method

// citys.forEach(function(item){
//     console.log(`City name :${item}`)});

// for(let i=0;i<users.length;i++){
//     console.log(users[i].firstName+" "+users[i].lastName)
// }

// for(let i in users){
//     console.log(`index ${i} value: ${users[i].firstName}`)
// }

// map:returns an array

// let veri = users.map(function(item){
//     return item.firstName+" "+item.lastName
// })

// console.log(veri);

// let numbers =[1,3,5,9,12];

// let num = numbers.map(function(n){
//     return n*n;
// })

// console.log(num)

//  Functions in javascript

// function hi(){
//     console.log("Hello World");
// }
// hi();
// hi();
// hi();

// function hi2(name,age){
//     console.log(`Hi ${name}, you are ${age} level :)`);    //template literals
// }
// hi2("Kubi",22);
// hi2("Fıstık",3);

//  function calculateAge(birthYear){
//      console.log(2023-birthYear)
//      return 2023-birthYear
//  }

// function driverLicense(birth,name){
//     let yas =calculateAge(birth)
//     let ehliyet=(yas>=18)
//     if(ehliyet){
//         console.log(`Hi ${name}, you can get a driver license.`)
//     }
//     else{
//         console.log(`${name},you cannot get the driver's licence because your age is not enough! `)}
//     }

//     // driverLicense(1976,"Ali")
//     driverLicense(2005,"Kero")

// Window Object

// veri = window

// console.log(veri);

// // Alert

// alert("Hi")

// // Prompt

// var veri2=prompt("Enter your name here")

// // Confirm

// var veri3=confirm("Are you sure you wanna exit.")

// if (veri3){
//     console.log("You succesfully quitted the website")
// }
// else{
//     console.log("quit didnt happen")
// }

// Location

// veri = window.location;
// veri = window.location.href;
// veri = window.location.hostname;
// veri = window.location.protocol;

// // // window.location.href="https://www.udemy.com"
// // window.location.reload()

// console.log(veri);

// Scopes and working with Scopes

// Global Scope

function a(){
    // Function Scope

}

if (true){
    // Block Scope
}

// Examples

 var veri1=5; // Global Scope
 let veri2=10;
 const veri3=15;

// function fonksiyon(){
//     // Function Scope Example
//     var veri1 = 30;
//     let veri2=40;
//     const veri3=50;
//     console.log(veri1,veri2,veri3)
// }

// fonksiyon()
// console.log(veri1,veri2,veri3)

if(true){
    // Block Scope Example
    var veri1=30; // var, variables can be used outside the scope
    let veri2=20;
    const veri3=30;
    console.log(veri1,veri2,veri3)
}

console.log(veri1,veri2,veri3)

// console.log(a);
// console.log(b);
// console.log(c);

const admin_password="11111111";

if(true){
    let admin_password="2222222";
}

console.log(admin_password)


