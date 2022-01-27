

$('#submit').on('click', function (){
    var city = $('#city').val();


    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: 'dc7b0ebe3a51ce3421b1dfcff8a97724',
        q:  city
    }).done(function(data) {
        console.log(data);
    });


})






