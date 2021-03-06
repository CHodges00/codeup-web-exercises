// let movies = function () {
//     [
//         {title: 'HAPPY FEET TWO', image: "assets/movie1.jpeg", release: '2011', gross: '$157,956,466'},
//         {title: 'STAR WARS', image: "assets/movie2.jpeg", release: '2019', gross: '$1,072,848,487'},
//         {title: 'HARRY-POTTER', image: "assets/movie3.jpeg", release: '2007', gross: '$940,043,931'},
//         {title: 'BEACHBUM', image: "assets/movie4.jpeg", release: '2019', gross: '$4,267,808'},
//         {title: 'wertyui', image: "assets/movie5.jpeg", release: '4567', gross: '$345,567,567'},
//         {title: 'wertyui', image: "assets/movie6.jpeg", release: '4567', gross: '$345,567,567'},
//         {title: 'wertyui', image: "assets/movie7.jpeg", release: '4567', gross: '$345,567,567'},
//         {title: 'wertyui', image: "assets/movie8.jpeg", release: '4567', gross: '$345,567,567'}
//     ]
// }
//
//
//
// function createHTML(movie) {
//     let html = '<div class="col-5 movies"><h2>"' + movie.title + '"</h2><img src="' + movie.image + '"><p>"' + movie.release + '"</p><p>"' + movie.gross + '"</p></div>'
//     return html;
// }
//
//
//
// function createColumns(movies) {
//     let html = '';
//     for (let i = 0; i < movies.length; i++) {
//         html += createHTML(movies[i]);
//     }
//     return html;
// }
//
//
//
//
// let contentArea = document.getElementsByClassName('row');
// contentArea.innerHTML = createColumns(movies);
//
// let setMovies = document.getElementById('btn-one')
// setMovies.addEventListener('click', createColumns);
//



// let newMovies = '  <div class="col-5 cards">\n' +
//     '            <h2 class="titles">HAPPY FEET TWO</h2>\n' +
//     '            <img src="assets/movie1.jpeg">\n' +
//     '            <p>RELEASE YEAR : 2011</p>\n' +
//     '            <p>LIFETIME GROSS : $157,956,466</p>\n' +
//     '        </div>\n' +
//     '        <div class="col-5 cards">\n' +
//     '            <h2 class="titles">STAR WARS</h2>\n' +
//     '            <img src="assets/movie2.jpeg">\n' +
//     '            <p>RELEASE YEAR : 2019</p>\n' +
//     '            <p>LIFETIME GROSS : $1,072,848,487</p>\n' +
//     '        </div>\n' +
//     '        <div class="col-5 cards">\n' +
//     '            <h2 class="titles">HARRY-POTTER</h2>\n' +
//     '            <img src="assets/movie3.jpeg">\n' +
//     '            <p>RELEASE YEAR : 2007</p>\n' +
//     '            <p>LIFETIME GROSS : $940,043,931</p>\n' +
//     '        </div>\n' +
//     '        <div class="col-5 cards">\n' +
//     '            <h2 class="titles">BEACHBUM</h2>\n' +
//     '            <img src="assets/movie4.jpeg">\n' +
//     '            <p>RELEASE YEAR : 2019</p>\n' +
//     '            <p>LIFETIME GROSS : $4,267,808</p>\n' +
//     '        </div>';


// let html = '<div>\n' +
//     '    <h2>\' + coffee.name + \'</h2>\n' +
//     '    <p>\' + coffee.roast +\'</p>\n' +
//     '</div>'


// MORNING PRACTICE

// Make a program that filters through this array:
// ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"]
// and returns a new array that contains only those whose name have only 4 letters in them.

// let names = ['ryan', 'kieran', 'jason', 'mary', 'jo', 'jake']
//
// function findNames () {
//     let newArr = [];
//     for (i = 0; i < names.length; i++) {
//         if (names[i].length === 4) {
//             newArr += names[i];
//         }
//         return newArr;
//     }
// }
//
// console.log(findNames());
















"use strict"



let coffees = function () {
    if (window.localStorage.getItem("coffees") === null) {
        return [
    {id: 1, name: 'Light City', roast: 'americano', image:" assets/coffe-americano.jpeg"},
    {id: 2, name: 'Half City', roast: 'americano', image:" assets/coffe-americano.jpeg"},
    {id: 3, name: 'Cinnamon', roast: 'americano', image:" assets/coffe-americano.jpeg"},
    {id: 4, name: 'City', roast: 'iced', image:" assets/coffee-iced.jpeg"},
    {id: 5, name: 'American', roast: 'iced', image:" assets/coffee-iced.jpeg"},
    {id: 6, name: 'Breakfast', roast: 'iced', image:" assets/coffee-iced.jpeg"},
    {id: 7, name: 'High', roast: 'iced', image:" assets/coffee-iced.jpeg"},
    {id: 8, name: 'Continental', roast: 'iced', image:" assets/coffee-iced.jpeg"},
    {id: 9, name: 'New Orleans', roast: 'mocha', image:" assets/coffee-mocha.jpeg"},
    {id: 10, name: 'European', roast: 'mocha', image:" assets/coffee-mocha.jpeg"},
    {id: 11, name: 'Espresso', roast: 'mocha', image:" assets/coffee-mocha.jpeg"},
    {id: 12, name: 'Viennese', roast: 'mocha', image:" assets/coffee-mocha.jpeg"},
    {id: 13, name: 'Italian', roast: 'mocha', image:" assets/coffee-mocha.jpeg"},
    {id: 14, name: 'French', roast: 'mocha', image:" assets/coffee-mocha.jpeg"}
        ]
    } else {
        return JSON.parse(window.localStorage.getItem("coffees"));
    }
}();




// RENDER HTML FOR COFFEES
function renderCoffee(coffee) {
    var html = '<div class="col-3 mx-2 mb-5 p-0" id=card><h2>' +   coffee.name  +  '</h2><img src="' + coffee.image + '"><p>' + '-' +   coffee.roast  + '-' + '</p></div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0;i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



// SELECT BY STYLE
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    if (selectedRoast === 'all') {
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}




// LIVE SEARCH FUNCTION
function searchCoffee() {
    let desiredCoffee = document.getElementById('searched-coffee').value.toLowerCase();
    let coffeeChoice = [];

    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().replace(/\s+/g, '').includes(desiredCoffee)) {
            coffeeChoice.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(coffeeChoice);
}


// ADD A COFFEE FUNCTION
// FOOTER FUNCTION STARTS HERE
function newCoffee(e) {
    e.preventDefault();
    let newCoffeeSubmission = {};
    let newSubmissionName = (newCoffeeName.value).toLowerCase();
    let newSubmissionRoast = newCoffeeRoast.value;
    newCoffeeSubmission.id = coffees.length + 1;
    newCoffeeSubmission.name = newSubmissionName;
    newCoffeeSubmission.roast = newSubmissionRoast;

// THIS MAKES SURE THERE'S A NAME ENTERED'
    if (newSubmissionName === '') {
        dupeAlert.innerHTML = "It's gotta have a name dude"
        return;
    }

// THIS MAKES SURE A STYLE IS CHOSEN
    if (newSubmissionRoast === ''){
        dupeAlert.innerHTML = "It's gotta look like something"
        return;
    }

// THIS MAKES SURE IT DOESN'T ALREADY EXIST
    for (let i = 0; i < coffees.length; i++) {
        if (newCoffeeName.value.toLowerCase().replace(/\s+/g, '') === coffees[i].name.toLowerCase().replace(/\s+/g, '')) {
            dupeAlert.innerHTML = "That beer already exists bud";
            return;
            // THIS ADDS IMAGE TO THE NEW BEER OBJECT
        } else {
            newCoffeeSubmission.name = newSubmissionName;
            newCoffeeSubmission.roast = newSubmissionRoast;
            dupeAlert.innerHTML = '';
            if (newSubmissionRoast === 'americana') {
                newCoffeeSubmission.image = "assets/coffe-americano.jpeg";
            } else if (newSubmissionRoast === 'iced') {
                newCoffeeSubmission.image = 'assets/coffe-iced.jpeg'
            } else (newSubmissionRoast === 'mocha')
                newCoffeeSubmission.image = 'assets/coffe-mocha.jpeg';
        }
    }
    coffees.push(newCoffeeSubmission);
    console.log(coffees);
    tbody.innerHTML = renderCoffees(coffees);
    window.localStorage.setItem('coffees', JSON.stringify(coffees));
}




// SHOWS SEARCHED COFFEES WITH EXACT NAME ENTERED
// DONT NEED AFTER LIVESEARCH WAS IMPLEMENTED
// function searchCoffee(e) {
//     e.preventDefault();
//     let desiredCoffee = document.getElementById('searched-coffee').value;
//     let coffeeChoice = [];
//
//     coffees.forEach(function (coffee) {
//         if (coffee.name == desiredCoffee) {
//             coffeeChoice.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(coffeeChoice);
// }







// BOTTOM OF JS

// DONT NEED AFTER LIVESEARCH WAS IMPLEMENTED
// var search = document.querySelector('#searched-btn')
// search.addEventListener('click', searchCoffee);

var tbody = document.querySelector('#cards');


let submitCoffee = document.querySelector('#contribute-coffee')

let newCoffeeName = document.querySelector('#added-coffee-name');
let newCoffeeRoast = document.querySelector('#added-coffee-roast');


let dupeAlert = document.querySelector('#duplicate-coffee');

var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
submitCoffee.addEventListener('click', newCoffee)






















