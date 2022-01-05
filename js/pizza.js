$('#next').click(function () {
    $('#profile-tab').tab('show');
});

$('#previous').click(function (){
    $('#home-tab').tab('show');
});

$('#next-step').click(function (){
    $('#contact-tab').tab('show');
});



// CRUST FUNCTION
let crust = document.forms[1]
let order = '';
function addFirstToOrder (){
    for (let i = 0; i < crust.length; i++){
        if (crust[i].checked){
            order = crust[i].value;
        }
    }console.log(order)
}


// CHEESE AND SAUCE FUNCTION
let a = $('#cheese option:selected').val();
let b = $('#sauce option:selected').val();
let c = $('#amount-sauce option:selected').val();
function addSecondToOrder (){
    let cheese = document.forms[2]
    console.log(a);
    console.log(c + ' ' + b);
}


// TOPPINGS FUNCTION
let toppings = document.forms[3]
let extras = " ";
function addThirdToOrder() {
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            extras += toppings[i].value;
        }
    }console.log(extras);
}

// ALERT FUNCTION
function sendOrder () {
    alert('Order Recieved For: ' + ' ' + order + ', ' + a + ', ' + c + ' ' + b + ', ' + extras)
}



