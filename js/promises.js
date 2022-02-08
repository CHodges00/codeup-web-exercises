// USERNAME TO PASS
let username = 'CHodges00'

// let username = $('#input').val()


// function githubGet() { return
fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `GITHUB_TOKEN`}}).then(response => {
    response.json().then(events => {
        events.forEach(event => {
            console.log(response);
            console.log(event);
        });
    });
});
// };


// $('#submit').on('click', githubGet())

