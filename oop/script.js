// let kaan={
//     name:"kubi",
//     yearOfBirth:2001,
//     job:"student",
// }

// val = kaan;
// console.log(kaan)
// console.log(typeof(kaan)

// function Student(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth
//     this.job=job
//     this.calculateAge=function(){
//         return 2023-this.yearOfBirth
//     }
    
//     console.log(this)
// }

// let eres = new Student("ereş",2008,"student")
// let ayliş = new Student("ayliş",2006,"student")

// console.log(eres.name)
// console.log(eres.yearOfBirth)
// console.log(eres.job)
// console.log(eres.calculateAge())

//  Prototype 

// let Person = function(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
    
// }

// let ayaz = new Person("ayaz",1980,"teacher");

// Person.prototype.calculateAge =function(){
//     return 2023-this.yearOfBirth;
// }

// Person.prototype.getName = function(){
//     return this.name;
// }
        
// console.log(ayaz.calculateAge())
// console.log(ayaz);
// console.log(ayaz.getName());

// Object.create

// let personProto= {
//     calculateAge : function(){
//         return 2023 - this.yearOfBirth
//     }
// }

// let kubi = Object.create(personProto)

// kubi.name="kubi"
// kubi.yearOfBirth=2001
// kubi.job="student"

// let asya =Object.create(personProto,{
//     name:{value:"asya"},
//     yearOfBirth:{value:2002},
//     job:{value:"student"}
// })

// console.log(kubi)
// console.log(kubi.calculateAge())
// console.log("--------------")
// console.log(asya)
// console.log(asya.calculateAge())

// Prototype based Inheritance

// let Person = function(name,yearOfBirth,job){
//         this.name=name;
//         this.yearOfBirth=yearOfBirth;
//         this.job=job;
// }

// Person.prototype.calculateAge=function(){
//     return  2023 - this.yearOfBirth ;
// }

// let Teacher = function(name,yearOfBirth,job,subject){
//     //Inheritance method
//     Person.call(this,name,yearOfBirth,job)
//     this.subject=subject;
// }

// Teacher.prototype=Object.create(Person.prototype)

// let aylin = new Teacher("aylin",1980,"teacher","history")
// console.log(aylin)
// console.log(aylin.calculateAge())

// Immediate Functions

// function welcome(){
//     var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     var today=new Date();
//     var msg="Welcome. Today is "+days[today.getDay()];
//     return msg;;
// }

// console.log(welcome());

(function(name){
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var today=new Date();
    var msg='Welcome '+ name + " Today is "+days[today.getDay()];
    console.log(msg);

}("Kubilay"))