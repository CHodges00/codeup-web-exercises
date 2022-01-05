$('#next').click(function () {
    $('#profile-tab').tab('show');
});

$('#previous').click(function (){
    $('#home-tab').tab('show');
});

$('#next-step').click(function (){
    $('#contact-tab').tab('show');
});

function addFirstToOrder (){
    let crust = document.forms[1]
    let order = '';
    for (let i = 0; i < crust.length; i++){
        if (crust[i].checked){
            order = crust[i].value;
        }
    }console.log(order)
}


function addSecondToOrder (){
    let cheese = document.forms[2]
    let a = $('#cheese option:selected').val();
    console.log(a);
    let b = $('#sauce option:selected').val();
    let c = $('#amount-sauce option:selected').val();
    console.log(b + ' ' + c);
}

function addThirdToOrder() {
    let toppings = document.forms[3]
    let extras = " ";
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            extras += toppings[i].value;
        }
    }console.log(extras);
}




