let btn = document.getElementById('btn')

function changeBtn(){
    btn.textContent = 'clicked'
    btn.style.color = 'red'
}
btn.onclick = changeBtn