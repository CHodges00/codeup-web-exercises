
// ADD NAME INPUT IN PROMPT
var name = prompt("what's your name ?")
var newName = document.getElementById('name');

newName.innerHTML = name;


var oldP = document.getElementsByClassName('para');
var newP = 'Cloudy'

for (var i = 0; i < oldP.length; i++){
    oldP[i].innerHTML = newP
}





