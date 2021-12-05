(function () {
    "use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */

var person = {
    firstName: "Cody",
    lastName: "Hodges",
}

console.log(person.firstName);
console.log(person.lastName);

/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
var person = {
    firstName: "Cody",
    lastName: "Hodges",
sayHello: function () {
    console.log("Hello from " + person.firstName + " " + person.lastName + "!");
}
}
console.log(person.sayHello());


/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

shoppers.forEach(function (shopper){
    // console.log((shopper.name + " spent " + shopper.amount + " !"));
    if (shopper.amount > 200){
        console.log((shopper.name + ' spent $' + shopper.amount.toFixed(2) + ', You earned a 12% dicount equaling $' +
            (shopper.amount * .12).toFixed(2) + ', making your new total $' + (shopper.amount * .88).toFixed(2)));
    }else{
        console.log((shopper.name + ' spent $' + shopper.amount.toFixed(2) + ' = No disocunt earned ! '));
    }
});


/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */

var books =
        [{title: 'Letting Go', author: {firstName: 'Philip', lastName: 'Roth'}},
            {title: 'Fear of Flying', author: {firstName: 'Erica', lastName: 'Jong'}},
            {title: 'Little Women', author: {firstName: 'Louisa', lastName: 'Alcott'}},
            {title: 'Illumination Light', author: {firstName: 'Alice', lastName: 'Hoffman'}}, {
            title: 'Geek Love', author: {firstName: 'Katherine', lastName: 'Dunn'}
        }];

console.log(books[3].title);
console.log(books[3].author.firstName);
console.log(books[3].author.lastName);


/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */

books.forEach(function (book){

    console.log("Book # " + (books.indexOf(book) + 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("---")
});
})();


/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
// [{title: 'Letting Go', author: {firstName: 'Philip', lastName: 'Roth'}},

//     function createBook() {
//     book.title = ("Title");
//     firstName = ('Authors First Name');
//     lastName = ('Authors Last Name')
//     books = {Title: title, author: {firstName, lastName}};
//     console.log(books);
// }
//
// console.log(createBook())
//
//
//
// function createBook() {
//     var book = [{title: '', author: ''}];
//     var givenTitle = prompt('Title');
//     var givenAuthor = prompt('Author');
//     console.log(book(givenTitle, givenAuthor));
// };
// function createBook() {
//     var title = prompt("Enter Title Here !");
//     var author = prompt("Who Wrote It ?");
//     var book = [{title, author}]
//     console.log(book);
// };


// // {title: "", author: ""}
// // {firstName: "", lastName:""} };
// let enteredBook = title;
// let enteredFirst = firstName;
// let enteredLast = lastName;
// console.log(book);
// });



//Objects Practice
//employee income
let employee = {
    baseSalary: 65000,
    overTime: 138,
    wage: 25.75,
    getWage: function () {
        return (this.baseSalary + (this.overTime * this.wage)).toFixed(2)
    }
}

//employees taxes
let uncleSam = {
    tax: .30,
    taxes: function () {
        return ((employee.getWage() * this.tax));
    }
}

//employees bring home
let takeHome = {
    federal: function () {
        return (employee.getWage() - uncleSam.taxes());
    }
};


//employee $ after taxes
let remainder = function () {
    return (takeHome.federal() / 12);
}


//New car
let car = {
    year: '2019',
    make: ' Chevalier',
    model: ' Road King',
    drive: ' AWD',
    yourCar: function () {
        return (this.year + this.make + this.model + this.drive);
    }
}


//Costs of new car
let finances = {
    price: 65000.99,
    payment: 800.54,
    insurance: 130.07,
    fuel: 250.82,
    monthlyCost: function () {
        return (this.payment + this.insurance + this.fuel).toFixed(2);
    }
}


//Intrest payments on loan per year
let intrest = {
    apr: .12,
    apr2: .09,
    varRateYearOne: function () {
        return ((finances.price * this.apr).toFixed(2));
    },
    varRateYearTwo: function () {
        return ((finances.price * this.apr2).toFixed(2));
    }
}


//$ per month in interest
let interestPayments = {
    monthYearOne: function () {
        return ((intrest.varRateYearOne() / 12).toFixed(2))
    },
    monthYearTwo: function () {
        return ((intrest.varRateYearTwo() / 12).toFixed(2))
    }
}


//amount left to pay
let totalPaid = {
    paidPremium1: function () {
        return ((finances.payment - interestPayments.monthYearOne()).toFixed(2))
    },
    paidPremium2: function () {
        return ((finances.payment - interestPayments.monthYearTwo()).toFixed(2))
    }
}




console.log('You made $' + employee.getWage() + ' this year !');
console.log('You paid $' + uncleSam.taxes() + ' in taxes on that income 😤');
console.log('Therefore, you only brought home $' + takeHome.federal() + ' this year 😭');
console.log('This means your monthly income = $' + remainder().toFixed(2));
console.log('You just financed a ' + car.yourCar() + ' !');
console.log('The amount financed = $' + finances.price);
console.log('The monthly costs to use the vehicle = ' + 'Loan Payment of $' + finances.payment
    + ', Insurance Premium of $' + finances.insurance + ' and a Fuel cost of $' + finances.fuel)
console.log('Coming to a grand total of $' + finances.monthlyCost() + ' in monthly expenses' + ' or $' + (finances.payment * 12).toFixed(2) + ' per year');


console.log('Your first year interest payments will = $' + intrest.varRateYearOne());
console.log('You will pay $' + interestPayments.monthYearOne() + ' in interest per month for the first year');
console.log('You will be paying $' + totalPaid.paidPremium1() + ' monthly to premium for the first year');
console.log('Making the total of premium payments for the first year = $' + (totalPaid.paidPremium1() * 12).toFixed(2));
console.log('Your remaining premium balance on your loan after the first year will be $' + (finances.price - (totalPaid.paidPremium1() * 12).toFixed(2)));



console.log('Your second year interest payments will = $' + intrest.varRateYearTwo());
console.log('You will pay $' + interestPayments.monthYearTwo() + ' in interest per month for the second year');
console.log('You will be paying $' + totalPaid.paidPremium2() + ' monthly to premium for the second year');
console.log('Making the total of premium payments for the second year = $' + (totalPaid.paidPremium2() * 12).toFixed(2));
console.log('Your remaining premium balance on your loan after the second year will be $'
    + ((finances.price - (totalPaid.paidPremium1() * 12)) - (totalPaid.paidPremium2() * 12).toFixed(2)));


console.log('Your total monthly income left would = $' + (remainder() - finances.monthlyCost()).toFixed(2));


console.log('If you invested 50% of your remaining income @ a 20% return for the year, you could make an extra $' +
    (((remainder() - finances.monthlyCost()) / 2 ) * .2).toFixed(2));