// const div = document.getElementById('child');
// let positionx = 0;
// let positiony = 0;

// const moveRight = setInterval(function(){
//     div.style.left = `${positionx}px`;
//     positionx++;

//     if(positionx >= 450){
//         clearInterval(moveRight);
            
//             const moveDown = setInterval(function(){
//                 div.style.top = `${positiony}px`;
//                 positiony++
//             }, 1);
//                 if(positionx <= 450){
//                 clearInterval(moveDown);
//             }
//     }
    
// }, 1);
const child = document.getElementById("child-container");
let positionX = 0;
let positionY = 0;
let moveRight = true;
let moveDown = true;
let moveLeft = true
let moveUp = true

const moveInterval = setInterval(function() {
    if (moveDown){
        child.style.top = positionY + 'px';
        positionY++;
        if (positionY >= 300) {
            moveDown = false;
        }
    } else if(moveRight) {
        child.style.left = positionX + 'px';
        positionX++;
        if (positionX >= 300) {
            moveRight = false;
        }
    }else if(moveUp){
        child.style.top = positionY + 'px';
        positionY--;
        if (positionY <= 0) {
            moveUp = false;
        }
    } else if(moveLeft){
        child.style.left = positionX + 'px';
        positionX--;
        if (positionX <= 0) {
            moveLeft = false;
        }
    } else{
        clearInterval(moveInterval)
    }
}, 10);


