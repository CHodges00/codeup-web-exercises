// Exercise 1

var a = 1;
// a = 1
console.log(a);
var b = a++;
// b = 1
console.log(b);
var c = ++a;
// c = 3
console.log(c);

var d = "hello";
// d = hello
var e = false;
// d = false
d++;
e++;
console.log(d);
// d = NaN
console.log(e);
// e = 1

var perplexed;
// undefined
perplexed + 2;
console.log(perplexed);
// undefined

var price = 2.7;
// price = undefined
price.toFixed(2);
// price = 2.70
console.log(price);

// var price = "2.7";
// price.toFixed(2);
// ?? not a function ??


console.log(isNaN(0));
// false
console.log(isNaN(1));
// false
console.log(isNaN(""));
// false
console.log(isNaN("string"));
// true
console.log(isNaN("0"));
// false
console.log(isNaN("1"));
// false
console.log(isNaN("3.145"));
// false
console.log(isNaN(Number.MAX_VALUE));
// false
console.log(isNaN(Infinity));
// false
console.log(isNaN("true"));
// true
console.log(isNaN(true));
// false
console.log(isNaN("false"));
// true
console.log(isNaN(false));
// false


console.log(!true);
// false
console.log(!false);
// true
console.log(!!true);
// true
console.log(!!false);
// false
console.log(!!0);
// false
console.log(!!-0);
// false
console.log(!!1);
// true
console.log(!!-1);
// true
console.log(!!0.1);
// true
console.log(!!"hello");
// true
console.log(!!"");
// false
console.log(!!'');
// false
console.log(!!"false");
// true
console.log(!!"0");
// true


// Exercise 2

var sample = "Hello, Codeup";
sample.toUpperCase();
console.log(sample);

sample += " Students";
sample = sample.replace("Students", "Class");
// Replace word in string
console.log(sample)
console.log(sample.length);

console.log(sample.indexOf("c"));
// -1 because no lowercase / -1 = 0
let cIndex = sample.indexOf("C");
console.log(sample.substr(cIndex), (sample.indexOf("p") + 1));
// ??


// Exercise 3

var lM = (3 * 3), bB = (3 * 5), hS = (3 * 1);
let cost = lM + bB + hS;
console.log(cost);
// Total rental cost = $27

// Exercise 4

var username = 'codeup';
var password = 'notastrongpassword';

console.log(password.length >=  5 || false);
// Password atleast 5 characters
console.log(password.includes(username));
// Password can't include username
console.log(username.length <= 20 && true);
// username less then 20
console.log(