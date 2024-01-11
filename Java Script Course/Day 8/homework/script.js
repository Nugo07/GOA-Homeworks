let balanceElement = document.getElementById('balance');
let depositAmountInput = document.getElementById('depositAmount');
let depositBtn = document.getElementById('depositBtn');
let withdrawBtn = document.getElementById('withdrawBtn');

let amount = 0
let value;

depositBtn.addEventListener('click', function(){
    value = Number(depositAmountInput.value)
    amount += value
    balanceElement.textContent =  `Balance: ${amount}$;`
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
})





