// let number = 12
let number = Math.random() * 9

document.getElementById('Generate').onclick = function(){
    
    answer1 = document.getElementById('p-1').innerHTML = Math.round( Math.random() * 9)
    answer2 = document.getElementById('p-2').innerHTML = Math.round( Math.random() * 9)
    
    document.getElementById('number').innerHTML = answer1 + answer2
}




  
// // let egg = 23
// let egg = Math.random() * 23
// console.log(Math.ceil(egg))
// console.log(Math.exp(egg))

// document.getElementById('my-button').onclick = function(){
//     document.getElementById('a').innerHTML = Math.round( Math.random() * 6)
//     document.getElementById('b').innerHTML = Math.round( Math.random() * 6)
//     document.getElementById('c').innerHTML = Math.round( Math.random() * 6)
// }