const p = document.getElementById('myp')
const myBtn = document.getElementById('mybtn')

let num = 0

myBtn.addEventListener('click', function(){
    num = num + 1
    p.textContent = num
})