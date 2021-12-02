//Break and Continue Exercise


let entered = prompt("Please enter an Odd # between 1-50");

let entered
    for (var i = 1; i < 51; i++) {
        entered = prompt("Please enter an Odd # between 1-50");
        if (entered % 2 !== 0) {
            break;
        }
    }
console.log("Number to skip " + entered);

    for(var b = 1; b < 51; b++){
        if (b % 2 === 0){
            continue;
        }
        if (entered == b){
            console.log("Skipping This One ! " + b);
        }else
            console.log("This is an Odd number ! " + b);
    }

