// const child = document.getElementById("child-container");
// let position = 0;
// let moveRight = true;

// const moveInterval = setInterval(function() {
//     if (moveRight) {
//         child.style.left = position + 'px';
//         position++;
//         if (position >= 200) {
//             moveRight = false;
//             }
//         } else {
//             child.style.left = position + 'px';
//             position--;
//             if (position == 0) {
//                 clearInterval(moveInterval)
//             }
//         }
//     }, 10);
const child = document.getElementById("child-container");
let positionX = 0;
let positionY = 0;
let moveRight = true;
let moveDown = true;

const moveInterval = setInterval(function() {
    if (moveRight) {
        child.style.left = positionX + 'px';
        positionX++;
        if (positionX >= 300) {
            moveRight = false;
        }
    } else if(moveDown){
        child.style.top = positionY + 'px';
        positionY++;
        if (positionY >= 300) {
            clearInterval(moveInterval);
        }
    }
}, 10);
