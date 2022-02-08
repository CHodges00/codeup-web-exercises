
// USERNAME TO PASS
let username = 'CHodges00'
// // PROMISE
// const myPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token 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`}});
// console.log(myPromise)
// // RESPONSE
// myPromise.then(response => response.json());
//
// // ERROR
// myPromise.catch(error => console.error(error));



fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `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`}}).then( response => {
    response.json().then( users => {
        users.forEach( user => {
            // do something with each user object...
            console.log(user);
        });
    });
});
