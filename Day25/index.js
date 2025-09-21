/* exercise 10
create a business name generator using 3 words

adjective 
crazy
amazing
fire

name
engine
food
drink

another word 
limited
bros
hub
*/

function Gen(a,b,c) {
    let num = Math.floor(Math.random()*3)
    if(num == 0)
        return a;
    else if( num == 1)
        return b;
    else
        return c
}

console.log(`Genarated name is = ${Gen("crazy", "amazing", "fire")} ${Gen("engine", "food", "drink")} ${Gen("limited", "bros", "hub")} `)


