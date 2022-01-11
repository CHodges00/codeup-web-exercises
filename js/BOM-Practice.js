// BOM IS AN OBJECT
// EXAMPLE OF BOM
// // let BOM = {
// //     window: {
// //         currentPage: 'www.vre.com',
// //         previousPage: 'www.vbfei.com',
// //     },
// //     // METHODS
// //     prompt: function (){
// //         //PROMPT FUNCTION
// //     }
// // }


let object = {
    numTotal: 50,
    location: 'TX',
    time: 1200,

    // METHOD
    presentAll: function () {
        return (this.numTotal + ' People in ' + this.location + ' at ' + this.time)
    }
}
console.log(object.presentAll())


