let a = prompt("Enter first number.")
let b = prompt("Enter second number.")

if (isNaN(a) || isNaN(b)) {
    throw new Error("Entered value is not a number");
}

// let sum = a + b;
let sum = parseInt(a) + parseInt(b);
// let sum = Number(a) + Number(b);

// let x = 1;
// try {
//     console.log("The sum is : ", sum*x);
// } 
// catch (error) {
//     console.log("Caution: there is some error in try block")
// }
// finally {        // this will run in both condition if the try throw error or successfully executed
//     console.log("the entire function has been executed")
// }
// console.log("the entire function has been executed") //this will also run in both condition if the try throw error or successfully executed

//Diffrence in normal line of code and finally in try catch
function main() {
    let x = 1;
    try {
        console.log("The sum is : ", sum * x);
        return true
    }
    catch (error) {
        console.log("Caution: there is some error in try block")
        return false
    }
    finally {        // this will run even if the fuction already returned the value
        console.log("the entire function has been executed")
    }
    // console.log("the entire function has been executed")    // this will not run
}
main()