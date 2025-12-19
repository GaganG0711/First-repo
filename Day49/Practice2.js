// create a array which took names of student and asign them a class by length of their name

let students = ["shiv", "jay", "harshvardhan", "shivani", " shubham", "anand", "lareb", "rahul", "gagan"]

let classes = [];

for (const student of students) {
    if (student.length <= 4 ) {
        classes.push("small")
    } 
    else if ( student.length <= 6 ) {
        classes.push("medium")
    }
    else if ( student.length <=8 ) {
        classes.push("large")
    }
    else {
        classes.push("larger")
    }
}

console.log(students)
console.log(classes)