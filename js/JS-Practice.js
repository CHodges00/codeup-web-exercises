// // RETURN TIMES 3
// // RETURN 'NOT A NUMBER' IF NOT NUM OR NUM STRING
// function timesThree(a) {
//     return (a * 3);
// }
//
// console.log('numbers')
// console.log(timesThree(4))
// console.log(timesThree(28))
// console.log(timesThree(2))
// console.log(timesThree(80))
// console.log('string')
// console.log(timesThree('4'));
// console.log(timesThree('28'));
// console.log(timesThree('2'));
// console.log(timesThree('80'));
// console.log('not number add')
// console.log(timesThree('vr'));
// console.log(timesThree('vfcd'));
// console.log(timesThree(1));
// console.log(timesThree('80'));
// console.log('next function')
//
//
// // TAKE IN NUM AND STRING RETURN STRING 'MATCHES LENGTH' OR 'NO MATCH' IF NUMBER = STRING LENGTH
// function numString(num, str) {
//     if (str.length === num) {
//         return ('match')
//     } else {
//         return ('no match')
//     }
// }
//
// console.log(numString(2, 'to'));
// console.log(numString(10, 'ten'));
// console.log('next function');
//
//
// // FUNCTION DAY OF WEEK AS STRING RETURN NUMBER THAT MATCHES DAY OF WEEK SUNDAY>1-7<SATURDAY
// function dayOfWeek (day){
//     if (day === 'sunday'){
//         return 1;
//     }else if (day === 'monday'){
//         return 2;
//     }else if (day === 'tuesday'){
//         return 3;
//     }else if (day === 'wednesday'){
//         return 4;
//     }else if (day === 'thursday'){
//         return 5;
//     }else if (day === 'friday'){
//         return 6;
//     }else if (day === 'saturday'){
//         return 7;
//     }
// }
//
// console.log(dayOfWeek('sunday'));
// console.log(dayOfWeek('monday'));
// console.log(dayOfWeek('tuesday'));
// console.log(dayOfWeek('wednesday'));
// console.log(dayOfWeek('thursday'));
// console.log(dayOfWeek('friday'));
// console.log(dayOfWeek('saturday'));
// console.log('next function')
//
// // LOOPS
// // LOG EACH STR CHARACTER
//
//     var str = 'four';
//     for (var i = 0; i < str.length; i += 1){
//         console.log(str[i]);
//     }
// console.log('next function');
//
//     // RETURN STR 133*
// var str133 = '1';
// for (var i = 0; i < 3; i += 1){ // i < 134
//     console.log(str133)
// }
//
// console.log('next function');








// Write a function that removes any duplicates from an array.
//
// expected output: [1, 2, 3, 4, 5, 6, 7, 8]


// const numbers =  [1 ,2 ,2 ,2 ,2 ,3 ,3 ,3 ,4 ,5 ,6 ,7 ,7 ,8 ,8]
//
// let duplicates = numbers.reduce((dups, number) => {
//     numbers.forEach(element => {
//         if(!dups.includes(element)){
//             dups.push(element);
//         }
//     })
//     return dups
//
// }, [])
//
// console.log(duplicates)





// write a function that takes a string as argument and returns the number of vowels contained in that string.
    // The vowels are “a”, “e”, “i”, “o”, “u”.


function vowels (str){
    let count = 0;


    for (var i = 0; i < str.length; i++){
        if (str.charAt(i).toLowerCase() == 'a' || str.charAt(i).toLowerCase() == 'e' ||
            str.charAt(i).toLowerCase() == 'i' || str.charAt(i).toLowerCase() == 'o' ||
            str.charAt(i).toLowerCase() == 'u'){
            count += 1;
        }
    }return count
}


console.log('Total number of vowels = ', vowels('ROBINhood'))

























