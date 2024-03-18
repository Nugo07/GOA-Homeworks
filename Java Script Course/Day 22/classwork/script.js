// const element1 = document.getElementById('hello1') 
// const element2 = document.getElementById('alo1')

// console.log(element1)
// console.log(element2)

// const elements1 = document.getElementsByClassName('hello1')
// const elements2 = document.getElementsByClassName('alo')

// console.log(elements1)
// console.log(elements2)


// const elements3 = document.getElementsByTagName('div')
// const elements4 = document.getElementsByTagName('p')

// console.log(elements3)
// console.log(elements4)


// const div = document.getElementById("my-div")
// // Count of child elements
// console.log(div.childElementCount)
// // Parent element
// console.log(div.parentElement)
// // Collection of child elements
// console.log(div.children)
// // Element after div
// console.log(div.nextElementSibling)
// // Previous element
// console.log(div.previousSibling)

// const btn = document.getElementById('btn');
// const divs = document.getElementsByTagName('div');

// btn.addEventListener('click', function() {
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].style.flexDirection = 'column';
//     }
// });

const myp = document.getElementById('myp');
const divs = document.getElementsByTagName('div');

myp.addEventListener('click', function() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'Yellow';
    }
});