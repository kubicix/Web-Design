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

let Person = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    
}

let ayaz = new Person("ayaz",1980,"teacher");

Person.prototype.calculateAge =function(){
    return 2023-this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}
        
console.log(ayaz.calculateAge())
console.log(ayaz);
console.log(ayaz.getName());