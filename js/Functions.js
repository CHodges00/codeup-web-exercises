/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello," + " " + name
}

console.log(sayHello("Cody"))

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

sayHello("Cody");
var helloMessage = sayHello("Cody");

console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Cody";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(random) {
    if (random === 2){
        return true
    } else{
        return false
    }
}
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent, bill) {
    var tipTotal = (tipPercent * bill);
    return "You should tip " + tipTotal.toFixed(2); // Keep from returning too many deciamls
}

console.log(calculateTip(.20, 178.95));
// should log 35.79
console.log(calculateTip(.25, 480.13));
// should log 120.03


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

//function calculateTip() {
//    var total = prompt("Enter total here ");
//    var percent = prompt("What percent would you like to tip ? * as a decimal !!");
//    var totalBill = alert("Your total tip amount is " + (total * percent));
//}

//console.log();


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(fullPrice, discountPercent) {
    var discountAmount = (fullPrice * discountPercent);
    var newTotal = (fullPrice - discountAmount);
    return "Discounted total is " + newTotal;
}

console.log(applyDiscount(500, .2));
// should log 400
console.log(applyDiscount(200, .5));
// should log 100
console.log(applyDiscount(5000, .27));
// should log 3650


////PRACTICE !!

////node functional
//function number(a, b) {
//    var multiple = a * b;
//    switch (multiple) {
//        case 100 :
//            return ("You're a Winner !")
//            break;
//        case 500 :
//            return ("!!!!! GRAND PRIZE !!!!!")
//            break;
//        case 60 :
//            return ("Runner Up !")
//            break;
//        case 25 :
//            return ("Prize Already Claimed....")
//            break;
//        default :
//            return ("Better Luck Next Time....")
//            break;
//    }
//}
//
//console.log(number(10, 10));
//console.log(number(10, 50));
//console.log(number(10, 6));
//console.log(number(10, 2.5));
//console.log(number(10, 1));

///
///functional w/prompt

//function number() {
//    var yourGuess = prompt("pick num 1-500");
//
//    switch (yourGuess) {
//        case '100' :
//            return ("You're a Winner !")
//            break;
//        case '500' :
//            return ("!!!!! GRAND PRIZE !!!!!")
//            break;
//        case '60' :
//            return ("Runner Up !")
//            break;
//        case '25' :
//            return ("Prize Already Claimed....")
//            break;
//        default :
//            return (yourGuess + " =" + " Better Luck Next Time....")
//            break;
//    }
//}

//console.log(number());
//console.log(number());
//console.log(number());
//console.log(number());
//console.log(number());
