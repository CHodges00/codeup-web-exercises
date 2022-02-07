const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];




// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array
const lang = users.filter(function (a){
    return a.languages.length >= 3;
})
console.log('users with 3 or > languages', lang)
console.log('-------------------')


// Use .map to create an array of strings where each element is a user's email address
const email = users.map(function (a){
    return a.email
})
console.log('users emails', email)
console.log('-------------------')


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce((total, user) => {
return total + user.yearsOfExperience
}, 0)
console.log('total years of experience = ' + totalYears)

const average = totalYears / users.length
console.log('average years of experience = ' + average)
console.log('-------------------')



// Use .reduce to get the longest email from the list of users.
const longEmail = email.reduce((previousValue, currentValue) => {
    if(currentValue.length > previousValue.length){
        return currentValue;
    }else{
        return previousValue
    }
}, '')
console.log('The longest email = ' + longEmail)
console.log('-------------------')




// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((previousValue, currentValue) => {

    return (previousValue + ' ' + currentValue.name + ',')
}, '')

console.log('Users names = ' + userNames.replace(/,([^,]*)$/, '.'))
console.log('-------------------')




// BONUS
// Use .reduce to get the unique list of languages from the list of users.


// console.log(languages)
// console.log('-------------------')






// EXTRA PRACTICE
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];


// Create an array of the first letters of each fruit
// let firstLetters = fruits.map(function (x){
//     return x[0];
// })
let firstLetters = fruits.map(x => x[0]);
console.log(firstLetters);
console.log('-------------------')




// Create array of user objects based on the customers array of objects (each user object should just have name and age properties)
const nameAge = customers.map(function (a){
    return {name: a.name, age: a.age}
})
console.log(nameAge)
console.log('-------------------')

// Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects
const civil = customers.filter(function (a){
    return a.occupation === 'Police Officer' || a.occupation === 'Teacher'
}).map((customers) => {
    return {name: customers.name, age: customers.age}
})
console.log(civil)
console.log('-------------------')


// Determine the average age of all the customers
const ages = customers.reduce(((previousValue, currentValue) => {
    return previousValue + currentValue.age
}), 0) / 3
console.log(ages)


// Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//     age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }

