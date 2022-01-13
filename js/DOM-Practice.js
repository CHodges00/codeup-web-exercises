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
    let html = '<div class="col-5 movies"><h2>"' + movie.title + '"</h2><img src="' + movie.image + '"><p>"' + movie.release + '"</p><p>"' + movie.gross + '"</p></div>'
    return html;
}



function createColumns(movies) {
    let html = '';
    for (let i = 0; i < movies.length; i++) {
        html += createHTML(movies[i]);
    }
    return html;
}




let contentArea = document.getElementsByClassName('row');
contentArea.innerHTML = createColumns(movies);

let setMovies = document.getElementById('btn-one')
setMovies.addEventListener('click', createColumns);










