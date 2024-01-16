let myp = document.getElementById('myp')
let user = prompt('Enter Your Name')
let balanceElement = document.getElementById('balance');
let depositAmountInput = document.getElementById('depositAmount');
let depositBtn = document.getElementById('depositBtn');
let withdrawBtn = document.getElementById('withdrawBtn');

let amount = 0
let value;

myp.textContent = 'Hello '  + user
depositBtn.addEventListener('click', function(){
    value = Number(depositAmountInput.value)
    amount += value
    balanceElement.textContent =  `Balance: ${amount}$;`
    
    depositAmountInput.value = ''
})

withdrawBtn.addEventListener('click',function(){
    value = Number(depositAmountInput.value)
    
    
    if (value > amount) {
        alert('Error')

    }
    else{
        amount -= value
    balanceElement.textContent = `Balance: ${amount}$;`
    }

    depositAmountInput.value = ''
})





