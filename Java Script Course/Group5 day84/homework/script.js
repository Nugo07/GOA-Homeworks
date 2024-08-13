
// const child = document.getElementById("child-container");
// let positionX = 0;
// let positionY = 0;
// let moveRight = true;
// let moveDown = true;
// let moveLeft = true
// let moveUp = true

// const moveInterval = setInterval(function() {
//     if (moveDown){
//         child.style.top = positionY + 'px';
//         positionY++;
//         if (positionY >= 300) {
//             moveDown = false;
//         }
//     } else if(moveRight) {
//         child.style.left = positionX + 'px';
//         positionX++;
//         if (positionX >= 300) {
//             moveRight = false;
//         }
//     }else if(moveUp){
//         child.style.top = positionY + 'px';
//         positionY--;
//         if (positionY <= 0) {
//             moveUp = false;
//         }
//     } else if(moveLeft){
//         child.style.left = positionX + 'px';
//         positionX--;
//         if (positionX <= 0) {
//             moveLeft = false;
//         }
//     } else{
//         clearInterval(moveInterval)
//     }
// }, 10);




document.addEventListener('keydown',function(event){

    const child = document.getElementById("child-container");

    let left = 0;
    let y = 0;
    let direct = '';

    if(event.key === "ArrowRight"){
        direct = "Right"
    }
    if(event.key === "ArrowDown"){
        direct = "Bottom"
    }
    if(event.key === "ArrowLeft"){
        direct = "Left"
    }
    if(event.key === "ArrowUp"){
        direct = "Up"
    }


    const moveRight = setInterval(function(){
        if(direct == "Right"){
            left++;
            if(left == 300){
                direct = "Bottom"
            }
        } else if(direct == "Bottom"){
            y++;
            if(y == 300){
                direct = "Left";
            }
        } else if(direct == "Left"){
            left--;
            if(left == 0){
                direct = "Up"
            }
        } else{
            y--;
            if(y == 0 && left == 0){
                clearInterval(moveRight);
            }
        }
    
        child.style.marginLeft = `${left}px`;
        child.style.marginTop = `${y}px`;
    }, 10);

    document.addEventListener('keyup',function(event){
        clearInterval(moveRight)
    })
    
});