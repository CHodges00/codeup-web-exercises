
// function getCommits(username) {
//     return fetch(`https://api.github.com/users/${username}/events`)
//         .then(response => response.json())
//         .catch(error => console.error(error))
// }
// console.log(getCommits())



let username = 'CHodges00'

const myPromise = fetch('https://api.github.com/users');
myPromise.then(response => console.log(response));
myPromise.catch(error => console.error(error));

