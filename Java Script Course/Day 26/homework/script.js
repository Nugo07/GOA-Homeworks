// const child = document.getElementById("child-container");

// let left = 0;
// let y = 0;
// let direct = "right"

// const moveRight = setInterval(function(){
//     if(direct == "right"){
//         left++;
//         if(left == 300){
//             direct = "bottom"
//         }
//     } else if(direct == "bottom"){
//         y++;
//         if(y == 300){
//             direct = "left";
//         }
//     } else if(direct == "left"){
//         left--;
//         if(left == 0){
//             direct = "top"
//         }
//     } else{
//         y--;
//         if(y == 0 && left == 0){
//             clearInterval(moveRight);
//         }
//     }

//     child.style.left = left + 'px';
//     child.style.top = y + 'px';
// }, 10);

const child = document.getElementById("child-container");
const container = document.getElementById("parent-container");

let left = 0;
let topPosition = 0;

document.addEventListener("keydown", function(event) {
    const containerRect = container.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const childWidth = childRect.width;
    const childHeight = childRect.height;

    switch(event.key) {
        case "ArrowLeft":
            left = Math.max(left - 10, 0);
            break;
        case "ArrowRight":
            left = Math.min(left + 10, containerWidth - childWidth);
            break;
        case "ArrowUp":
            topPosition = Math.max(topPosition - 10, 0);
            break;
        case "ArrowDown":
            topPosition = Math.min(topPosition + 10, containerHeight - childHeight);
            break;
    }

    child.style.left = left + "px";
    child.style.top = topPosition + "px";
});
