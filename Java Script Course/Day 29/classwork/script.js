// const parent = document.getElementById('parent')
// const child = document.getElementById('child')

// parent.addEventListener('click',function(){
//   parent.style.backgroundColor = 'blue'
  
// },true)


// child.addEventListener('click',function(){
//   child.style.backgroundColor = 'brown'
// },)

// // 2 davaleba
// // const parent = document.getElementById('parent')
// // const child = document.getElementById('child')


// // parent.addEventListener('click',function(){
// //   console.log(parent.childNodes)
// // },true)

// // child.addEventListener('click',function(){

// // },true)


const img = document.getElementById('photo');
const nextBtn = document.getElementById('next');
const pervBtn = document.getElementById('perv');

const images = [
  "../img/goa1.png",
  "../img/goa2.png",
  "../img/goa3.png" 
];

let count = 0;

nextBtn.addEventListener('click', function() {
  count += 1;

  if (count >= images.length) {
    count = 0;
  }

  img.src = images[count];
});

pervBtn.addEventListener('click', function() {
  count -= 1;

  if (count < 0) {
    count = images.length - 1;
  }

  img.src = images[count];
});
