// ADD NAME INPUT IN PROMPT
// var name = prompt("what's your name ?")
// var newName = document.getElementById('name');
//
// newName.innerHTML = name;
//
//
// var oldP = document.getElementsByClassName('para');
// var newP = 'Cloudy'
//
// for (var i = 0; i < oldP.length; i++){
//     oldP[i].innerHTML = newP
// }


let movies = function () {
    [
        {title: 'HAPPY FEET TWO', image: "assets/movie1.jpeg", release: '2011', gross: '$157,956,466'},
        {title: 'STAR WARS', image: "assets/movie2.jpeg", release: '2019', gross: '$1,072,848,487'},
        {title: 'HARRY-POTTER', image: "assets/movie3.jpeg", release: '2007', gross: '$940,043,931'},
        {title: 'BEACHBUM', image: "assets/movie4.jpeg", release: '2019', gross: '$4,267,808'},
        {title: 'wertyui', image: "assets/movie5.jpeg", release: '4567', gross: '$345,567,567'},
        {title: 'wertyui', image: "assets/movie6.jpeg", release: '4567', gross: '$345,567,567'},
        {title: 'wertyui', image: "assets/movie7.jpeg", release: '4567', gross: '$345,567,567'},
        {title: 'wertyui', image: "assets/movie8.jpeg", release: '4567', gross: '$345,567,567'}
    ]
}

function createHTML(movie) {

    let movie = '<div class= "col-5 cards"><h2> "' + movies.title + '" </h2><img src="' + movies.image + '"> <p>"' + movies.release + '"</p><p>"' + movies.gross + '"</p></div>';
    return movie;
}



let button1 = document.querySelector('#btn-one');
button1.addEventListener('click', createHTML)




