let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let btn = document.getElementById('btn')
let myp = document.getElementById('myp')

btn.addEventListener('click',function(){
    console.log(Number(num1.value) + Number(num2.value))
    myp.textContent = 'alo gamarjoba'
})