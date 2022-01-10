// RETURN TIMES 3
// RETURN 'NOT A NUMBER' IF NOT NUM OR NUM STRING
function timesThree(a) {
    return (a * 3);
}

console.log('numbers')
console.log(timesThree(4))
console.log(timesThree(28))
console.log(timesThree(2))
console.log(timesThree(80))
console.log('string')
console.log(timesThree('4'));
console.log(timesThree('28'));
console.log(timesThree('2'));
console.log(timesThree('80'));
console.log('not number add')
console.log(timesThree('vr'));
console.log(timesThree('vfcd'));
console.log(timesThree(1));
console.log(timesThree('80'));
console.log('next function')


// TAKE IN NUM AND STRING RETURN STRING 'MATCHES LENGTH' OR 'NO MATCH' IF NUMBER = STRING LENGTH
function numString(num, str) {
    if (str.length === num) {
        return ('match')
    } else {
        return ('no match')
    }
}

console.log(numString(2, 'to'));
console.log(numString(10, 'ten'));
console.log('next function');


// FUNCTION DAY OF WEEK AS STRING RETURN NUMBER THAT MATCHES DAY OF WEEK SUNDAY>1-7<SATURDAY
function dayOfWeek (day){
    if (day === 'sunday'){
        return 1;
    }else if (day === 'monday'){
        return 2;
    }else if (day === 'tuesday'){
        return 3;
    }else if (day === 'wednesday'){
        return 4;
    }else if (day === 'thursday'){
        return 5;
    }else if (day === 'friday'){
        return 6;
    }else if (day === 'saturday'){
        return 7;
    }
}

console.log(dayOfWeek('sunday'));
console.log(dayOfWeek('monday'));
console.log(dayOfWeek('tuesday'));
console.log(dayOfWeek('wednesday'));
console.log(dayOfWeek('thursday'));
console.log(dayOfWeek('friday'));
console.log(dayOfWeek('saturday'));
console.log('next function')

// LOOPS
// LOG EACH STR CHARACTER

    var str = 'four';
    for (var i = 0; i < str.length; i += 1){
        console.log(str[i]);
    }
console.log('next function');

    // RETURN STR 133*
function return133 (str){
    
}
