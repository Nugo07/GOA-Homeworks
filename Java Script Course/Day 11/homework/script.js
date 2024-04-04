// 1) davaleba

// const me  = {
//     firstName :'Nugzar',
//     secondName : 'Turmanishvili',
//     age : 16,
//     rank : 'Student',
//     studies : 'GOA',
    
// }
// me.firstName = function(){
//     console.log(this.firstName + " " + this.secondName)
// }



// 2) davaleba
// const car  = {
//     color : 'Silver',
//     model : 'C-Class',
//     releaseDate : 2021,
//     doors : 4,
//     engine : function(){
//         return this.aboutCar
//     },

//     aboutCar : {
//         horsePower : 313, 
//         maxSpeed : 245,
//         fuelConsumption : 6,
//     }
// }


// 3)davaleba

// const btn = document.getElementById('btn')
// function saveFormData() {
    
//     const firstName = document.getElementById('name').value;
//     const lastName = document.getElementById('lastname').value;
//     const age = document.getElementById('age').value;

    
//     const userData = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age
//     };

//     btn.addEventListener('submit',function(){
//         console.log(userData)
//     })
    
// }


// 4) davaleba

const me  = {
    firstName :'Nugzar',
    secondName : 'Turmanishvili',
    rank : 'Student',
    studies : 'GOA',    
}

const method = {
    walk: function(){
        console.log(firstName + " " + secondName + " " + 'walking')
    },
    age: function(){
        console.log(firstName + " " + 'studies' + " " + studies)
    },
    wodeba: function(){
        console.log(firstName + " " + 'is' + " " + rank)
    }
}


```// const me = {
//     name: 'Luka',
//     lastname: 'Tskhvaradze',
//     age: 17,

//     changeName: function(newName){
//         me.name = newName;
//     }
// }

// me.changeName('Nika');

// const database = {
//     account1: {
//         name: 'Luka',
//         lastname: 'tslhvaradze',
//         age: 17
//     },

//     account2: {
//         name: 'Nika',
//         lastname: 'Keshelava',
//         age: 24
//     }
// }


// const car = {
//     name: 'Mercedes Benz',
//     color: 'Black',
//     model: '190e',
//     doors: 4,

//     engine: {
//         horsePower: 109,
//         km: 185,
//         power: 80,
//         cilindre: 8
//     },

//     getEngine: function(){
//         return car.engine;
//     }
    
// }

// const form = document.getElementById('form');
// const btn = document.getElementById('btn');

// let accountObj = {}

// btn.addEventListener('click',function(){
//     accountObj.name = form.elements.name.value;
//     accountObj.lastname = form.elements.lastname.value;
//     accountObj.age = form.elements.age.value;

//     console.log(accountObj);
// });

// console.log(accountObj)

const me = {
    name: 'Luka',
    lastname: 'Tskhvaradze',
    age: 17
}

const you = {
    name: 'Nika',
    lastname: 'Keshelava',
    age: 24
}

const administrator = {
    changeName: function(accountObj,newName){
        accountObj.name = newName;
    },

    changeLastname: function(accountObj,newLastname){
        accountObj.lastname = newLastname;
    },

    changeAge: function(accountObj,newAge){
        accountObj.age = newAge;
    }
}

administrator.changeName(me,'Nia');
administrator.changeLastname(you,'Boboxidze');

console.log(me);
console.log(you);```