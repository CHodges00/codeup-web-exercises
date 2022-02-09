function githubGet() {
    let username = $('#input').val()

    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `GITHUB_TOKEN`}}).then(response => {
        response.json().then(events => {
            // ZULU TIME/DATE FORMAT RETURNED FROM EVENT
            let push = events[0].created_at;
            // TIME OF PUSH IN LOCAL TIME STRING
            let timeOfPush = new Date(push).toLocaleString()
            // TIME OF PUSH IN MILLISECONDS
            let pushTime = new Date(events[0].created_at.toLocaleString()).getTime();
            // TIME NOW IN MILLISECONDS
            let now = new Date().getTime();
            // DIFFERENCE BETWEEN PUSH AND NOW STRTING WITH MILLISECONDS
            let diff = (((now - pushTime) / 1000) / 60).toFixed(0);

            console.log(timeOfPush.substring(timeOfPush.indexOf(',') + 1))


            $('#last-push').html('');
            $('#last-push').append(`Your last push was completed on : ${timeOfPush.substring(0, timeOfPush.indexOf(','))}<br> @ ${timeOfPush.substring(timeOfPush.indexOf(',') + 1)}`);
            $('#time-since').html('');
            $('#time-since').append(`This was : ${diff} minutes ago`);
        });
    });
}


$('#submit').one('click', githubGet);



// WAIT FUNCTIONALITY
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

// wait(2000).then(() => alert('Welcome, the only thing to do here is search how long it has been since your last GitHub push........ENJOY !'));
// wait(20000).then(() => prompt(`You've been here for a while, enter your email to sign up for our newsletter !`));

