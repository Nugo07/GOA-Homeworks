let emailInput = document.getElementById('email')
let passInput = document.getElementById('pass')
let nameInput = document.getElementById('name')
let surnameInput = document.getElementById('surname')
let dateInput = document.getElementById('date')

let btn = document.getElementById('btn')


btn.addEventListener('click', function(){
    console.log(emailInput.value)
    console.log(passInput.value)
    console.log(nameInput.value)
    console.log(surnameInput.value)
    console.log(dateInput.value)
})