// // animated-expansion.js

// function expandWord(word) {
//   let outputs = [];

//   function build(word, prefix = "") {
//     if (prefix === word) {
//       outputs.push(prefix);
//       return;
//     }

//     const target = word[prefix.length];

//     // If target is space → just add space and continue
//     if (target === " ") {
//       const newPrefix = prefix + " ";
//       outputs.push(newPrefix);
//       build(word, newPrefix);
//       return;
//     }

//     for (let ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch++) {
//       const letter = String.fromCharCode(ch);
//       const newPrefix = prefix + letter;
//       outputs.push(newPrefix);

//       if (letter === target) {
//         build(word, newPrefix); // go deeper
//         break;
//       }
//     }
//   }

//   build(word);

//   // Animate with 50ms delay
//   let i = 0;
//   const interval = setInterval(() => {
//     console.log(outputs[i]);
//     i++;
//     if (i >= outputs.length) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// // Example usage
// expandWord("gagan rocks");




// animated-expansion.js

// animated-expansion.js

function expandWord(word) { // (loaded into memory, not executed yet)
    let outputs = []; // [2]

    function build(word, prefix = "") { // (loaded into memory, not executed yet)
        if (prefix === word) { // [5]
            outputs.push(prefix); // [6]
            return; // [7]
        }

        const target = word[prefix.length]; // [8]

        // If target is space → just add space and continue
        // if (target === " ") { // [9]
        //     const newPrefix = prefix + " "; // [10]
        //     outputs.push(newPrefix); // [11]
        //     build(word, newPrefix); // [12]
        //     return; // [13]
        // }

        for (let ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch++) { // [14]
            const letter = String.fromCharCode(ch); // [15]
            const newPrefix = prefix + letter; // [16]
            outputs.push(newPrefix); // [17]

            if (letter === target) { // [18]
                build(word, newPrefix); // [19]
                break; // [20]
            }
        }
    } // (function body done, build defined)

    build(word); // [3]

    // Print all outputs
    for (let i = 0; i < outputs.length; i++) { // [21]
        console.log(outputs[i]); // [22]
    }
} // (end of expandWord execution)

// Example usage
expandWord("gaganrocks"); // [1]
