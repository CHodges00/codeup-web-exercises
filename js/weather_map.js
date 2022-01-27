// ON SUBMIT BUTTON VLIVK
$('#submit').on('click', function () {

// CITY = USERS INPUT VAL
    var city = $('#city').val();
// GET DATA FOR CITY NAME ENTERED
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: 'dc7b0ebe3a51ce3421b1dfcff8a97724',
        q: city
// WHEN DONE -----
    }).done(function (data) {
        console.log(data)
        $('#cityName').append(`<p>Current City: ${data.name}`);
        console.log(data.main)
        $('.row').append(`<div class="col-2 ml-auto mr-auto">
        <div class="card">
            <h5 class="card-header text-center">DATE</h5>
            <div class="card-body">
                <div class="card-text">
                    <div class="card-center">
                        <p>${data.main.temp}<br>${data.main.feels_like}</p>
                        <img src='http://openweathermap.org/img/w/04n.png' style="width: 30px; height: 30px">
                    </div>
                    <hr>
                        <p>Description: <b>OVERCAST CLOUDS</b></p>
                        <p>Humidity: <b>HUMIDITY</b></p>
                        <hr>
                            <p>Wind: <b>WIND</b></p>
                            <hr>
                                <p>Pressure: <b>PRESSURE</b></p>
                </div>
            </div>
        </div>
    </div>`)
    });
})


// // console.log(data.coord);
// mapboxgl.accessToken = 'pk.eyJ1IjoiaG9kZ2VzY29keTAwIiwiYSI6ImNreXhoeHBhYTBpNTYyb3FwNG90aWFkaGIifQ.kYy3FfTNOUM0hO486IGMZQ';
//
//
//
// let map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: {lon: -47.23, lat: 47.23}, // starting position [lng, lat]
//     zoom: 10 // starting zoom
// });
// console.log(data.coord)
// console.log(map.center)
//
//
// let marker = new mapboxgl.Marker()
//     .setLngLat()
//     .setPopup(new mapboxgl.Popup().setHTML(`${restaurant.name}<br>${restaurant.Hours}<br>Best Food: ${restaurant.bestFood}`)) // add popup
//     .addTo(map);




