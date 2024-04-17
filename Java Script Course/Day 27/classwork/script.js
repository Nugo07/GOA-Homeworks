let div = document.getElementById("counter")
let btn = document.getElementById("btn")

let count = 0

function countA(){
  count += 1
  div.textContent = count
  if(count === 10){
    btn.removeEventListener("click", countA)
  }
}

btn.addEventListener("click", countA)
