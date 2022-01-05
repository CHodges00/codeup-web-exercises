$('#next').click(function () {
    $('#profile-tab').tab('show');
});

$('#previous').click(function (){
    $('#home-tab').tab('show');
});

$('#next-step').click(function (){
    $('#contact-tab').tab('show');
});

function addCheeseToOrder (){
    let cheese = document.forms[2]
    let x = $('#cheese option:selected').val();
    console.log(x);
    }


