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

















"use strict"

function renderCoffee(coffee) {
    var html = 

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


















