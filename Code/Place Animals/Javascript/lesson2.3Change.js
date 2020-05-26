// var letterIceCream = document.getElementById("letter-iceCream");
// var letterJuice = document.getElementById("letter-juice");
// function changeIceCream() {
//     letterCup.style.display = "none";
//     animalMove[indAn].style.display = "block"; 
//     micro.style.display = "none"; 
//     setTimeout(function(){
//         letterIceCream.style.opacity = "1";
//         letterIceCream.style.fontSize = "38px";
//         letterIceCream.style.top = "60px";
//         letterIceCream.style.left = "75px";
//         letterIceCream.style.transition = "all 0.4s";
//         setTimeout(function() {
//             micro.style.display = "block";
//             micro.style.left = "30px";
//             letterIceCream.style.top = "60px";
//             letterIceCream.style.left = "75px";
//             letterIceCream.style.fontSize = "38px";
//         }, 500); 
//     }, 50);
// }

// function changeJuice() {
//     letterIceCream.style.display = "none";
//     animalMove[indAn].style.display = "block"; 
//     micro.style.display = "none"; 
//     setTimeout(function(){
//         letterJuice.style.opacity = "1";
//         letterJuice.style.fontSize = "38px";
//         letterJuice.style.top = "60px";
//         letterJuice.style.left = "75px";
//         letterJuice.style.transition = "all 0.4s";
//         setTimeout(function() {
//             micro.style.display = "block";
//             micro.style.left = "30px";
//             letterJuice.style.top = "60px";
//             letterJuice.style.left = "75px";
//             letterJuice.style.fontSize = "38px";
//         }, 500); 
//     }, 50);
// }



// //
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