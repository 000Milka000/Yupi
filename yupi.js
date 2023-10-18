// const iAm = {
//     name: 'Vika',
//     age: 20
// };

// for (let n in iAm){
//     console.log(iAm[n])
// };

class People{
    constructor(name, age, sex){
        this.name = name,
        this.age = age,
        this.sex = sex
    };

     a (){
        console.log(`Ваше имя: ${this.name}.   Ваш возраст: ${this.age}.   Ваш пол: ${this.sex}.`)
    }


}
console.log("")
let vika = new People("Vika", 20, "women");

let vasya = new People("Vasya", 36, "men");

let tanya = new People("Tanya", 25, "women");

vika.a();
console.log("")
vasya.a();
console.log("")
tanya.a();