// მთავარი ლოგიკა  არის ის რომ მომხმარებელი ეჯიბრება კომმპიუტერს  თამაშში სახელად  dice-roll სადაც ვინც უფრო მაღალ ქულას  გააგორებს ის იგებს

// 1) საიტზე შევლის დროს  მომხმარებელს მოვთხოვოთ სახელი ა) გამოიყენეთ prompt() ფუნქცია
// 2) როდესაც მომხმარებელი  დააჭრეს ხელს roll ღილაკს მაშინ უნდა დავაგენერიროთ  შემთხვევით რიცხვები კომპიუტერისთვის  და მომხმარებლისთვის       ა) გამოიყენეთ addEventListener  რომ დავაფიქსიროთ დაკლიკების მოვლენა 
// დაფიქსირების შემდეგ გამოვიყენოთ  მათემატიკური მოვლენა სახელად Math.random() იმისთვის რომ მომხმარებელს და კომპიუტერს შევუქმნათ შეთხვევითი რიცხვი
// გ) დაგენერირების შემდეგ შევინახოთ ორივე მონაცემი ცვლადებში და გამოვუტანოთ მომხმარებელს UI-ში

// 3) თუ მოიგებს მომხმარებელი მოეამტოს ქულა მომხმარებელს, თი კომპიუტერი მოიგებს მოემატოს ქულა კომპიუტერს 

// ა) შევქმნათ ცვლადები კომპიუტერისთვის და მომხმარებლისთვის 

// ბ) შევამოწმოთ if-esle გამოყენებით რომლის ქულა არის უფრო მეტი

// გ) მოჰებულს კი მოვუმატოთ თამაშის მთლიანი ქულა და გამოვუტანოთ მომხმარებელს UI-ში

// 4) თუ მომხმარებეი დააწკაპებს ხელს reset ღილაკს მაშინ თამაშის ქულა გავანულოთ

// ა) გამოიყენეთ addEventListener  რომ დავაფიქსიროთ დაკლიკების მოვლენა 

// ბ)ცვლადები რომლებიც შევქმენით მთლიანი თამაშის ქულების შესანახად  გავანულოთ და აგრეთვე გავანულოთ შემთხვევითი რიცხვისთვის შექმნილი ცვლადები და გამოვუტანოთ მომხმარებელს UI-ში
  
const userFinalScoreHtml = document.getElementById('user-game-score')
const computerFinalScoreHtml = document.getElementById('computer-game-score')
const playerNameHtml = document.getElementById('player-name')
const playerScoreHtml = document.getElementById('player-score')
const computerScoreHtml = document.getElementById('computer-score')
const rollBtn = document.getElementById('roll-btn')
const resetBtn = document.getElementById('reset-btn')

playerNameHtml.textContent = prompt('Please enter your name: ')

let num1 = 0 
let num2 = 0
let userScore = 0
let computerScore = 0

// Prompt for player's name
 


// Event listener for the roll button
rollBtn.addEventListener('click', function(){
    num1 = Math.floor(Math.random() * 7)
    num2 = Math.floor(Math.random() * 7)

    // Update scores
    if(num1 > num2){
        userScore++
    }
    if(num1 < num2){
        computerScore++
    }

    // Update the UI
    playerScoreHtml.textContent = num1
    computerScoreHtml.textContent = num2

   userFinalScoreHtml.textContent = userScore
   computerFinalScoreHtml.textContent = computerScore
})


resetBtn.addEventListener('click', function(){
    playerScoreHtml.textContent = num1
    computerScoreHtml.textContent = num2

   userFinalScoreHtml.textContent = userScore
   computerFinalScoreHtml.textContent = computerScore
   num1 = 0
   num2 = 0
   userScore = 0
   computerScore = 0
})
