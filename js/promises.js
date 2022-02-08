function githubGet() {
    let username = $('#input').val()

    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `GITHUB_TOKEN`}}).then(response => {
        response.json().then(events => {
            var push = new Date(events[0].created_at.toLocaleString()).getTime();
            var now = new Date().getTime()
            const diff = (now - push);

            console.log(push)
            console.log(now)
            console.log(diff/1000/60)


            $('#last-push').append(`Your last push was completed on : ${localDate}`)

        });
    });
}

$('#submit').on('click', githubGet);

