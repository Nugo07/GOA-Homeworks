let p1 = document.getElementById('p1')
let com = document.getElementById('com')
let btn = document.getElementById('btn')
let play = document.getElementById('play')


btn.addEventListener('click', function(){
     com = Math.floor(Math.random() * 6) + 1;
     btn = Math.floor(Math.random() * 6) + 1;
     
     if(p1 === com) { 
        play.textContent = 'Draw'
    }
    else if(p1 < com){
        play.textContent = 'Com Wins'
    }
    else{
        play.textContent = 'Player1 Wins'
    }

})
  
    

