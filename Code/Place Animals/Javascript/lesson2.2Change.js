var letterGrapes = document.getElementById("letter-grapes"); 
var letterPear = document.getElementById("letter-pear");
var letterWatermelon = document.getElementById("letter-watermelon");
function change(str) {
    let letter = document.getElementById("letter-" + str);
    if(str === "grapes"){
        letterOrange.style.display = "none";
    }
    if(str === "pear"){
        let letter = document.getElementById("letter-grapes"); 
        letter.style.display = "none";
    }
    if(str === "watermelon"){
        let letter = document.getElementById("letter-pear"); 
        letter.style.display = "none";
    }
    animalMove[indAn].style.display = "block";
    micro.style.display = "none"; 
    setTimeout(function(){
        letter.style.opacity = "1";
        letter.style.fontSize = "42px";
        letter.style.top = "60px";
        letter.style.left = "200px";
        letter.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letter.style.top = "60px";
            letter.style.left = "230px";
            letter.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
/*
var letterGrapes = document.getElementById("letter-grapes"); 
var letterPear = document.getElementById("letter-pear");
var letterWatermelon = document.getElementById("letter-watermelon");
function changeGrapes() {
    letterOrange.style.display = "none";
    animalMove[indAn].style.display = "block";
    micro.style.display = "none"; 
    setTimeout(function(){
        letterGrapes.style.opacity = "1";
        letterGrapes.style.fontSize = "42px";
        letterGrapes.style.top = "60px";
        letterGrapes.style.left = "200px";
        letterGrapes.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterGrapes.style.top = "60px";
            letterGrapes.style.left = "230px";
            letterGrapes.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
function changePear() {
    letterGrapes.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterPear.style.opacity = "1";
        letterPear.style.fontSize = "42px";
        letterPear.style.top = "60px";
        letterPear.style.left = "200px";
        letterPear.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterPear.style.top = "60px";
            letterPear.style.left = "230px";
            letterPear.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
function changeWatermelon() {
    letterPear.style.display = "none";
    animalMove[indAn].style.display = "block"; 
    micro.style.display = "none"; 
    setTimeout(function(){
        letterWatermelon.style.opacity = "1";
        letterWatermelon.style.fontSize = "42px";
        letterWatermelon.style.top = "60px";
        letterWatermelon.style.left = "200px";
        letterWatermelon.style.transition = "all 0.4s";
        setTimeout(function() {
            micro.style.display = "block";
            micro.style.left = "180px";
            letterWatermelon.style.top = "60px";
            letterWatermelon.style.left = "230px";
            letterWatermelon.style.fontSize = "38px";
        }, 500); 
    }, 50);
}
*/