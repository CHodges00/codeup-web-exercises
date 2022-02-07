

let username = 'CHodges00'

function getCommits(username) {
    return fetch(`https://api.github.com/users/${username}/events`)
        .then(response => response.json())
        
        .catch(error => console.error(error))
}

console.log(getCommits())


