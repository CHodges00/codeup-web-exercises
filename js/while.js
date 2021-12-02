//WHILE-LOOP

let num = 2;

while(num <= 65536){
    console.log(num);
    num = (num * 2);
}


// DO-WHILE

let conesToSell = Math.floor(Math.random() * 50) + 50;
console.log("We need to sell " + conesToSell + " cones")

do{
    const conesBoughtByEach = Math.floor(Math.random() * 5) + 1;

    if (conesToSell >= conesBoughtByEach){
        console.log("Customer bought " + conesBoughtByEach + " cones !");
        conesToSell -= conesBoughtByEach; // conestosell - conesboughtbyeach = conestosell
        console.log("There are " + (conesToSell) + " cones left to sell..");
    }else{
        console.log(conesBoughtByEach + " ? I only have " + conesToSell + " left, SORRY !");
    }
    if (conesToSell === 0){
        console.log("SOLD OUT !!!")
    }

} while(conesToSell > 0);


