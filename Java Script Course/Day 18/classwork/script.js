function person (name,surname,age){
    this.name = name
    this.surname = surname
    this.age = age

    this.aboutPerson = function(){
        console.log('This Is Name: ' + this.name)
        console.log('This Is Surname: ' + this.surname)
        console.log('This Is Age: ' + this.age)
    }
}


const personInfo = new person('Nugzar','Turmanishvili', 16)

personInfo.aboutPerson( )
