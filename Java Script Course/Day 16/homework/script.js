// 1) davaleba
const person = {
    name : 'Nugzar',
    age : '16',
    city : 'Kareli'
}

// 2) davaleba
console.log(person.name)

// 3) davaleba

person.age = '22'
console.log(person.age)

// 4) davaleba

person.country = 'Georgia'
console.log(person.country)

// 5) davaleba

const person1 = {
    name : 'Nugzar',
    age : '16',
    city : 'Kareli',
    great : function(name){
        console.log('Hello My Name Is' +  ' ' + name)
    }
}

person1.great('Nugzar')

// 6) davaleba

const user1 = {
    name : "Alika" ,
    age : '21',
    country : 'Madagascar'
}

const user2 = {
    name : "Alika" ,
    age : '21',
    country : 'Madagascar'
}

console.log(user1 === user2)

// 7) davaleba

const school = {
    schoolName : '155 Public School',
    aboutStudents : [
        {name : 'Nugzar', age : '16'},
        {name : 'Luka', age : '17'}
    ]
}
console.log(school.aboutStudents)

// 8)davaleba

const calculator = {
    damateba : function(num1, num2){
        console.log(num1 + num2)
    },
    gamokleba : function(num1, num2){
        console.log(num1 - num2)
    },
    gayofa : function(num1, num2){
        console.log(num1 / num2)
    },
    gamravleba : function(num1, num2){
        console.log(num1 * num2)
    }
}

calculator.damateba(2, 5)
calculator.gamokleba(10 , 3)
calculator.gayofa(40, 2)
calculator.gamravleba(100, 2)



// 9) davaleba
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const name2 = document.getElementById('name').value;
    const password = document.getElementById('pass').value;
        
    if (name2.length < 5) {
        alert('Username must be at least 5 characters long');
    } else {
    console.log('Success');
    }
        
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
    } else {
        console.log('Succses');
    }
    const user = {
        username : name2,
        password : password
    }
    console.log(user)
});