
var randomNumber1 = Math.floor(Math.random()*6)+1
console.log(randomNumber1)
var image1 = document.querySelector(".img1").src="images/dice"+randomNumber1+".png";
console.log(image1)

var randomNumber2 = Math.floor(Math.random()*6)+1
console.log(randomNumber2)
var image2 = document.querySelector(".img2").src="images/dice"+randomNumber2+".png";
console.log(image2) 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!"
}
else{
    document.querySelector("h1").innerHTML="It's a Tie!!"
}
