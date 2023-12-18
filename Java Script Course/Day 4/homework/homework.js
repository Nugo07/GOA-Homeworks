function myFunc(){
    let num1 = Number(prompt('enter number 1:'))
    let num2 = Number(prompt('enter number 2:'))
    let num3 = Number(prompt('enter number 3'))
    console.log(num1 + num2 + num3)
}
myFunc()

let alo = document.getElementById('alo')
let btn = document.getElementById('btn')
function myP(){
    alo.textContent = ('Hello')
    alo.style.color = 'blue'
}
btn.onclick = myP