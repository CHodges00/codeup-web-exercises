console.log("******** Exercise # 1 ********")

function showMultiplicationTable(num){
    for (var i = 1; i < 11; i++){
        console.log(num + " * " + i + " = " + (num * i));
    }
}
showMultiplicationTable(7);

console.log("******** Exercise # 2 ********")

function randomNumbers(){
    for (var i = 0; i < 10; i++){
        let random = (Math.floor(Math.random() * (200 - 20 + 1)) + 20);

        if (random % 2 === 0){
            console.log(random + " Is Even");
        }else
            console.log(random + " Is Odd");
    }
}
randomNumbers();

console.log("******** Exercise # 3 ********")

function numPyramid(){
    for(let i = 1; i < 10; i++){
        let nums = "";
        for(let a = i; a > 0; a--){
            nums += i;
        }console.log(nums);
    }
}
numPyramid();

console.log("******** Exercise # 4 ********");

function minusFive(){
    let gap = 5;
    for(let i = 100; i > 0; i-=gap){
            console.log(i)
        }
    }
minusFive();


// function addFive(){
//     for(let i = 20; i < 100; i++){
//         if(i % 10 === 0){
//             console.log(i)
//         }
//     }
// }
// addFive()

