let para = $('#one');
console.log(para);


// GET ELEMENT
let header = $('.header');
console.log(header);
// GET TEXT
let textOfHeader = $('.header').text()
console.log(textOfHeader)
// GET HTML/TEXT
let htmlOfHeader = $('.header').html()
console.log(htmlOfHeader)

// ADD CLASS TO ELEMENT
// $('.header').addClass('border');



// IF LOGGED IN WILL BE RED
let usr1 = {
    name: 'tom',
    loggedIn : false,
    age: 30
}

let loginStatus = usr1.loggedIn
if (loginStatus === true){
    $('.header').addClass('border')
}