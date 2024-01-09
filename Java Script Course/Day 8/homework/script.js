let balanceElement = document.getElementById('balance');
let depositAmountInput = document.getElementById('depositAmount');
let depositBtn = document.getElementById('depositBtn');
let withdrawBtn = document.getElementById('withdrawBtn');

depositBtn.addEventListener('click', () => {
    const depositAmount = Number(depositAmountInput.value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        const currentBalance = Number(balanceElement.innerText.replace('Balance: ', ''));
        const newBalance = currentBalance + depositAmount;
        balanceElement.innerText = 'Balance: ' + newBalance.toFixed(2); // Adjust to your needs
        depositAmountInput.value = '';
    } else {
        alert('Please enter a valid positive number for the deposit.');
    }
});

