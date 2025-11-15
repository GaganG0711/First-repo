// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(555)
//         }, 5000);
//     })
// }
async function getData() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })

    let data = await x.json()
    // console.log(data)
    return data;
}

async function main() {
    
    console.log("loading modules!")
    
    console.log("Doing somthing like serching form google")
    
    console.log("Load Data")
    let data = await getData()
    console.log(data)
    
    console.log("Wait")
    
    console.log("Process Data")
}
main()



// data.then((e) => {

//     console.log(data)
    
//     console.log("Wait")
    
//     console.log("Process Data")
// })


