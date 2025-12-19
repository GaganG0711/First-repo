async function getJokes() {
    try {
        let response = await fetch("https://official-joke-api.appspot.com/jokes/general/ten")
        let jokes = await response.json();
        return jokes

    } catch (error) {
        console.log("Error", error)
    }
}

(async () => {
    const jokes = await getJokes();  // with this iife method u can get array not promise.
    console.log(jokes)

    let body = document.body;
    let block = document.createElement("div")
    body.appendChild(block)
    body.style.fontSize = "20px";

    const index = Math.floor(Math.random() * jokes.length)

    block.innerText = `Person 1 : ${jokes[index].setup} \n Person 2 : ${jokes[index].punchline}`;

})();