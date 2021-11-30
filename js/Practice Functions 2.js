// // VARIABLES/FUNCTIONS PRACTICE
//
// // Determine if a person can buy a drink at a bar
// // at the bar ?
// // is sober ?
// // have enough money ?
// // are they 21 ?
//
// let isAtBar = true; // change to true if at bar
// let sober = .07;
// let age = 22;
// let cash = 6.32;
//
// let canHaveDrink = (isAtBar && sober < .08 && age >= 21 && cash >= 5.00);
// // if all true, returns true
//
// if (canHaveDrink) {
//     console.log("Drink up !");
// } else {
//     console.log("No drinks for you !");
// }
//
// // if doesnt have to be at bar for drink to be served / can be served to go
// // if (canHaveDrink && isAtBar){
// //     console.log("Drink up !");
// // }else if (canHaveDrink && !isAtBar){
// //     console.log("To go beer");
// // }else {console.log("No drinks for you !")
//
// // }
//
//
// // ----------- FUNCTIONS
//
// // function tryToGetADrink(isAtBar, sober, age, cash){ // the function DEFINITION (line 37-50) contains PARAMETERS
//
// // No longer need the variables because they are listed in the function ^^^
// //let isAtBar = false;
// //let sober = .07;
// //let age = 22;
// //let cash = 6.32;
//
// //     let canHaveDrink = (isAtBar && !isAtBar && sober < .08 && age >= 22 && cash >= 5.00);
// //
// //     if (canHaveDrink){ //if true
// //     }else{ //if not true
// //         console.log("Drink up !");
// //         console.log("No drinks for you !");
// //    }
// //}
//
// // console.log("First Invocation")
// // tryToGetADrink(true, .06, 22, 60.00); // when you CALL (line 52) the function, you pass ARGUMENTS
//
// // console.log("Second Invocation")
// // tryToGetADrink();
// ///////^^^^^ERRORS ABOVE !! ///// BELOW IS CORRECT
//
//
// ///EXERCISE
// // write function, 2 arguments, function will determine if "today is good day to fly.
// // 1 is it cloudy?
// // 2. how many planes flying ?
// // if not cloudy and less than 10 planes = good day to fly
//
// function goodDayToFly(cloudy, planesInSky) {
//
//     if (!cloudy && planesInSky < 10) {
//         console.log("Lets Fly !");
//     } else {
//         console.log("You're staying here !")
//     }
// }
//
// goodDayToFly(true, 8);
// goodDayToFly(false, 8);
//
//
// ////////// Function to return value when called upon
//
// function getFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
//
// let fullName = getFullName("Cody", "Hodges")
//
// console.log(fullName);
//
// ///////Another option
// // let fullName = function(firstName, lastName){
// //  return firstName + " " + lastName;
// // .log(fullName("Cody" + " " + "Hodges");
//
//
// /////// 4 function exercise
// // 1st add
// // 2nd subtract
// // 3rd multiply
// // 4th divide
// // 5th return remainder
// // take 2 parameters // return 1 value
//
// //1
// function adding(first, second) {
//     return first + second;
// }
//
// console.log(adding(5, 7));
//
// //2
// function subtract(first, second) {
//     return first - second;
// }
//
// console.log(subtract(10, 3));
//
// //3
// function multiply(first, second) {
//     return first * second;
// }
//
// console.log(multiply(5, 10));
//
// //4
// function divide(first, second) {
//     return first / second;
// }
//
// console.log(divide(60, 3));
//
// //5
// function remainder(first, second) {
//     return first % second;
// }
//
// console.log(remainder(10, 4));

// function topFive(){
//     let scores = [];
//     for(let i = 0; i < 5; i++ ){
//         topFive = scores + randomScores(200,300);
//     }
// }

//generate random # for scores
function randomScores(min, max) {
    return Math.floor(Math.random() * (300 - 200 + 1) + 200)
}
//put random scores into array
function makeScoreBoard() {
    let score1 = randomScores();
    let score2 = randomScores();
    let score3 = randomScores();
    return [score1, score2, score3]
}
//log array of scores
    const scoreBoard = makeScoreBoard();
        console.log("Array of scores"); console.log(scoreBoard);

//log average of scores in array
    let average = scoreBoard.reduce((a, b, c) => a + b + c) / scoreBoard.length - 1;
        console.log("Average of scores in Array"); console.log(average);

//log best score in array
    let max = Math.max(...scoreBoard);
        console.log("Find best 'largest' score in array"); console.log(max);

//if best score is divisible by 3 OR 5
    function isDivisible() {
        if (max % 3 === 0 || max % 5 === 0) {
            return true;
        } else {
            return false;
        }
    }
        console.log("If best score is divisible by 3 OR 5"); console.log(isDivisible(max));







