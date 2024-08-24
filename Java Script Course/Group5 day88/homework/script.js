// const colorValue = document.getElementById('color')
// const addItemIcon = document.getElementById('+')
// const mainContainer = document.getElementsByClassName('main-box-container')[0]

// addItemIcon.addEventListener('click', handleAdd)
    

// let newX = 0, newY = 0, oldY = 0, oldX = 0

// function handleAdd(){
//     let newBox = document.createElement("div")
//     newBox.innerHTML = `
//     <form class="box-container">
//         <div class="box-bar">
//             <span id="x">&#x2718</span>
//         </div>
//         <textarea name="ta" id ="ta" placeholder="Enter text..."></textarea>
//     </form>
//     `

//     const boxValue = newBox.querySelector(".box-bar")
//     const boxContainer = newBox.querySelector(".box-container")
//     const exitElement = newBox.querySelector('#x')
//     const txtArea = newBox.querySelector('#ta')

//     txtArea.style.background = colorValue.value

//     mainContainer.appendChild(newBox)
//     exitElement.addEventListener("click", handleRemove)


//     function handleRemove(){
//         boxContainer.parentElement.remove()
//     }

//     boxValue.addEventListener("mousedown", handleMouseDown)

//     function handleMouseDown(e){
//         e.preventDefault()
//         oldX = e.clientX
//         oldY = e.clientY
//         document.addEventListener("mousemove", handleMouseMove)
//         document.addEventListener("mouseup", handleMouseUp)

//         function handleMouseMove(e){
//             newY = oldY - e.clientY
//             newX = oldX - e.clientX

//             boxContainer.style.top = (boxContainer.getBoundingClientRect().top - newY) + "px"
//             boxContainer.style.left = (boxContainer.getBoundingClientRect().left - newX) + "px"

//             oldX = e.clientX
//             oldY = e.clientY
//         }
//         function handleMouseUp() {
//             document.removeEventListener("mousemove", handleMouseMove)
//             document.removeEventListener("mouseup", handleMouseUp)
//         }
//     }
// }



const printElements = () => {
    const myArray = [1, 2, 3, 4];
    const myObject = { a: 'grdzelo', b: 'me', c: 'roba' };
  
    console.log("Array elements:");
    for (const item of myArray) {
      console.log(item);
    }
  
    console.log('Object properties and values:');
    for (const key in myObject) {
    console.log(key)
    }
  };
  
  // ფუნქციის გაწვევა
  printElements();
  