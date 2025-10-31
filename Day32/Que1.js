1. /*
// take input from user and show them alert msg
let age = prompt("Enter your Age...")
if (age>=18) {
    alert(`Your age is ${age}, you can Drive`)
}
else if (age<18 && age>1)
    alert(`Can not drive`)
else
    alert("Invalid input")
*/

2. /*
let age = prompt("enter your age")
let dicision = confirm("you want ot see prompt again")
if (dicision == true){
    age = prompt("enter your age again")
    if(age>=18){
        alert("you can drive")
    }
    else{
        alert("you cannot drive")
    }
}
else{
    console.log("running")
    if(age>=18)
        alert("u can drive")
    else
        alert("u cannot drive")
}
*//*
let age = Number(prompt("enter age"))
let again = confirm("rewrite the age")
if (again == true)
    age = Number(prompt("enter age again"))
if (isNaN(age))
    alert(`invalid age ${age}`)
else if(age >=18)
    alert(`u can drive ${age}`)
else
    alert(`u cannnot drive ${age}`)
*/

3. /*
let age = Number(prompt("enter age"))
let again = confirm("rewrite the age")
if (again == true)
    age = Number(prompt("enter age again"))
if (isNaN(age) || age<0){
    // alert(`invalid age ${age}`)
    console.error("negetive age")
}
else if(age >=18)
    alert(`u can drive ${age}`)
else
    alert(`u cannnot drive ${age}`)
*/

4. /*
let num = prompt("Enter a number")
if(num>4){
    window.location.href="https://www.google.com"
    // window.location.assign("https://www.google.com")
    // window.location.replace("https://www.google.com")
}
*/

5.
let col = prompt("enter background color")
document.body.style.backgroundColor = `${col}`