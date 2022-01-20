"use strict";

// ALERT FOR WHEN DOCUMENT IS READY/LOADED
// $(document).ready(function() {
//     alert('READY !')
// });



// Use jQuery to select an element by the id. Alert the contents of the element.
let header = $('#header-1');
console.log(header);
let headerContent = $('#header-1').text();
alert('Header text = ' + headerContent);



// Update the jQuery code to select and alert a different id.
let para = $('#para-1');
console.log(para);
let paraContent = $('#para-1').text();
alert('Para conent = ' + paraContent)



// Update your code so that at least 3 different elements have the same class named codeup.
// Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
$('.codeup').css('border' , '1px solid red');
// Remove the class from one of the elements. Refresh and test that the border has been removed.



// Using jQuery, set the font-size of all li elements to 20px.
$('li').css('font-size', '20px')
// Craft selectors that highlight all the h1, p, and li elements.
$('h1').css('background-color', 'yellow')
$('p').css('background-color', 'blue')
$('li').css('background-color', 'green')
// Create a jQuery statement to alert the contents of your h1 element(s).
let headers = $('h1').text();
alert('Header texts = ' + headers);
// Combine your selectors that highlight all the h1, p, and li elements.
$('h1, p, li').css('background-color', 'green')