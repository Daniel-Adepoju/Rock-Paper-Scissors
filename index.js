		
	let container = document.querySelector(".container")
	let items = document.querySelectorAll(".item")
	let rule = document.querySelector(".rule")
	let rulesImage = document.querySelector('.rulesImage')
	let rulesImageCon = document.querySelector('.rulesImageCon')
	let resultContainer = document.querySelector(".resultContainer")
let userResult = document.querySelector("#userResult")
let computerResult = document.querySelector("#computerResult")
let img = document.querySelectorAll("img")
let verdict = document.querySelector(".verdict")
let restart = document.querySelector(".restart")
let userScore = document.querySelector(".userScore")
let computerScore = document.querySelector(".computerScore")
let userScoreCounter = 0
let computerScoreCounter = 0

const images = [
	"../images/icon-paper.svg",
	"../images/icon-scissors.svg",
	"../images/icon-rock.svg",
	]
	
	items.forEach((item,index) => {
	item.addEventListener("click", (e) => {
 userResult.src = e.target.src
 container.classList.add("hide")
 resultContainer.classList.remove("hide")
 
 //computer,s pick
 let choiceDeterminer = Math.floor(Math.random() * 3)	+ 1
 let userPick = e.target.dataset.id
const txt = document.querySelector(".verdictText")
	
	setTimeout(() => {
	verdict.classList.remove("hide")
if (choiceDeterminer.toString() === userPick) {
 computerResult.src = e.target.src
 txt.textContent ="Draw"
}
if(userPick === "1" && choiceDeterminer === 2) {
	computerResult.src = images[1]
txt.textContent = "You Lose"
computerScoreCounter++
computerScore.textContent = `Computer Score: ${computerScoreCounter}`
}
if (userPick === "1" && choiceDeterminer === 3) {
	computerResult.src = images[2]
	txt.textContent = "You Win"
	userScoreCounter++
	userScore.textContent = `Your Score: ${userScoreCounter}`
}

if (userPick ==="2" && choiceDeterminer=== 1) {
computerResult.src = images[0]
	txt.textContent = "You Win"
	userScoreCounter++
	userScore.textContent = `Your Score: ${userScoreCounter}`
}

if (userPick ==="2" && choiceDeterminer=== 3) {
computerResult.src = images[2]
	txt.textContent = "You Lose"
	computerScoreCounter++
	computerScore.textContent = `Computer Score: ${computerScoreCounter}`
}

if (userPick ==="3" && choiceDeterminer=== 1) {
computerResult.src = images[0]
	txt.textContent = "You Lose"
	computerScoreCounter++
	computerScore.textContent = `Computer Score: ${computerScoreCounter}`
}

if (userPick ==="3" && choiceDeterminer=== 2) {
computerResult.src = images[1]
	txt.textContent = "You Win"
	userScoreCounter++
	userScore.textContent = `Your Score: ${userScoreCounter}`
}
	},800)
	})
	})

//restart	
restart.addEventListener("click", () => {
	container.classList.remove("hide")
 resultContainer.classList.add("hide")
verdict.classList.add("hide")
computerResult.src = " "
})

//rules
rule.addEventListener('click', () => {
 rulesImageCon.classList.remove('hide')
})
rulesImage.addEventListener('click', () => {
 rulesImageCon.classList.add('hide')
})