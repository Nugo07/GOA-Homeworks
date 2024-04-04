// const parentDiv = document.getElementById('parent')
// const form = document.getElementById('my-form');

// form.addEventListener('submit', function(e) {
//     e.preventDefault()

//     const firstName = form.elements.name.value;
//     const lastName = form.elements.lastName.value;

//     const pNode = document.createElement('p')
//     const textNode = document.createTextNode(firstName + ' ' + lastName)

//     pNode.appendChild(textNode)
//     parentDiv.appendChild(pNode)
// }) 


const myForm1 = document.getElementById('form1');
const myForm2 = document.getElementById('form2');
const signUp = [];

myForm1.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = myForm1.elements.name.value;
    const lastName = myForm1.elements.lastName.value;

    signUp.push({ firstName, lastName });
    console.log(signUp);  
});


