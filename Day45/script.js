// let obj = {
//     name : "gagan",
//     age : 22,
// }
// console.log(obj)

// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps : true
// }
// console.log({...rabbit})  

// this adds animal's property to rabbit wihtout createing another eats key. with just object 
// rabbit.__proto__ = animal;
// console.log(rabbit)


// class  //better approch for adding multiple methods

// class animal {
//     constructor() {
//         console.log("A Class is created/ consutructor automatically run when we use new keyword") }
//     eats() {    console.log("Animal can eat")    }
//     jumps() {    console.log("Animal can jumps")    }
// }
// let a = new animal( );
// console.log(a)

class animal {
    constructor(name) {
        this.name = name;
        console.log("A Class is created")   //consutructor automatically run when we use new keyword
    }
    eats(eat) {
        this.eat = eat
        console.log("Animal can eat")
    }
    jumps() {
        console.log("Animal can jumps")
    }
}

class Lion extends animal {
    constructor(name) {
        // super()
        // this.name = name;
        super(name)
        console.log("A Class is created")   //consutructor automatically run when we use new keyword
    }
    jumps() {
        console.log("lion can jumps")   //Mehtod overrideing 
    }
}

let a = new animal("lion");
console.log(a)

let l = new Lion("sher")
console.log(l)