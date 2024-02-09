const btn = document.getElementById('btn');
function userInfo(name,email,password){
    this.name = name
    this.email = email
    this.password = password
}


btn.addEventListener('click', function() {
    const firstName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    
    const user = new userInfo(firstName,email,password)
    let nameP = document.getElementById("myp1").innerHTML = firstName;
    let emailP = document.getElementById("myp2").innerHTML = email;
    let passwordP = document.getElementById("myp3").innerHTML = password;
    console.log(user);
    console.log(nameP,emailP,passwordP)
});
    