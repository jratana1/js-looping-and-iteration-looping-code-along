// Code your solutions in this file
function writeCards(names, event){
    let answer = []
    for (let i = 0; i < names.length; i++) {
        answer.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      }
    return answer
}

function countDown(integer){
    let count = integer;
    while (count >= 0) {
        console.log(count--);
    } 
}