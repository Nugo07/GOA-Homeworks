let checkBox = document.getElementById('checkbox')
let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let value = checkBox.checked
    console.log(value)

    if(value === true){
        alert('Success')
    }
    else{
        alert('Error')
    }
})