function githubGet() {
    let username = $('#input').val()

    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `GITHUB_TOKEN`}}).then(response => {
        response.json().then(events => {
            var localDate = new Date(events[0].created_at.toLocaleString());
            var now = new Date()
            var difference = 1
            console.log('difference ' + difference)
            console.log('now ' + now.getTime())
            console.log('push ' + localDate.getTime())
            console.log((((now.getTime() - localDate.getTime()) / 1000)/60)/60)
            // console.log('Date of last push = ', events[0].created_at.substring(10, 0))
            // console.log('Time of last push = ', events[0].created_at.split('T', 5)[1])
            // console.log('Last push was on :', localDate)
            // $('#last-push').append(`Your last push was completed on : ${localDate}`)
        });
    });
}

$('#submit').on('click', githubGet);

