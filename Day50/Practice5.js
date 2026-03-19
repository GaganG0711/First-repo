// password validator 8 char long upper and lowercase included and minimum one digit

// 1. loop version
// function validator(str) {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasDigit = false;

//     for (const ch of str) {
//         if (ch >= "A" && ch <= "Z") hasUpper = true;
//         if (ch >= "a" && ch <= "z") hasLower = true;
//         if (ch >= "0" && ch <= "9") hasDigit = true;
//     }
//     if (hasLower == true && hasUpper == true && hasDigit == true && str.length >=8) {
//         console.log("Valid password")
//     }
//     else {
//         if (hasLower !== true) {
//            console.log("Invalid password must contain lower case Char.")
//         }
//         else if (hasUpper !== true) {
//             console.log("Invalid password must contain upper case Char.")
//         }
//         else if (hasDigit !== true){
//             console.log("Invalid password must contain a digit")
//         }
//         else(
//             console.log("minimum 8 charectar require")
//         )
//     }
// }
// validator("hello");
// validator("HELLO");    
// validator("Hello12");  
// validator("Hello123");  

function validator(str) {
    if (str.length < 8) return console.log("minimum 8 charector require");
    if (!/[a-z]/.test(str)) return console.log("must contain lowercase");
    if (!/[A-Z]/.test(str)) return console.log("must conatian uppercase");
    if (!/\d/.test(str)) return console.log("must contain a digit");

    console.log("valid Password")
}

validator("helloooo");
validator("HELLOOOO");    
validator("Helloooo");  
validator("Hello12");  
validator("Hello123");  