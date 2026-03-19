// Check how many vowels are there in a giver string
function Check(str) {
    let vowel = 0;
    for (const element of str) {
        if (/[aeiouAEIOU]/.test(element)) {
            vowel = vowel + 1;
        }
    }
    console.log(vowel)
}

Check("hello there how are u")

