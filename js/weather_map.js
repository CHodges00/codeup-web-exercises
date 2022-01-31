// ON SUBMIT BUTTON
$('#submit').on('click', function () {


// CITY = USERS INPUT VAL
    var city = $('#city').val();




// GET DATA FOR CITY NAME ENTERED
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
        q: city,
        units: "imperial"
// WHEN DONE -----
    }).done(function (data) {
        console.log(data)

        for (var i = 0; i < 5; i++){
            var day = data.list[i];
            var date = day.dt_txt;
            console.log(date)
            date = date.substring(0, 10);

            console.log(date)
            // console.log(day)
            $('.row').append(`<div class="col-2 ml-auto mr-auto">
                            <div class="card">
                                <h5 class="card-header text-center">${date}</h5>
                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="card-center">
                                        <div class="temps" style="line-height: 3">
                                           <p>HIGH: ${day.main.temp_max}F<br>LOW: ${day.main.temp_min}F</p>
                                        </div>
                                        <img src='http://openweathermap.org/img/w/${day.weather[0].icon}.png' style="width: 30px; height: 30px">
                                        </div>
                                    <hr>
                                    <p>Description: <b>${day.weather[0].description}</b></p>
                                    <p>Humidity: <b>${day.main.humidity} %</b></p>
                                    <hr>
                                    <p>Wind: <b>${day.wind.speed} mph</b></p>
                                    <hr>
                                    <p>Pressure: <b>${day.main.pressure}</b></p>
                                    </div>
                                </div>
                            </div>
                            </div>`);
        }

        $('#cityName').append(`<p>Current City: ${data.city.name}`);


        console.log(data.city.coord)

        mapboxgl.accessToken = 'pk.eyJ1IjoiaG9kZ2VzY29keTAwIiwiYSI6ImNrejJ3ZWhmcjAweGoybm55Z3lrNTlyNWgifQ.2Y_WT2W1PWBdIJCuK9azig';

        var map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: data.city.coord, // starting position [lng, lat]
            zoom: 10 // starting zoom
        });
        let marker = new mapboxgl.Marker()
            .setLngLat(data.city.coord)
            .setPopup(new mapboxgl.Popup().setHTML(`${data.city.name}`)) // add popup
            .addTo(map);



        map.on('click', (e) => {
            var coords = `{lat: ${e.lngLat.lat}, lon:${e.lngLat.lng}}`;
            console.log(coords)


            marker = new mapboxgl.Marker(el)
                .setLngLat(e.lngLat)
                .setPopup(new mapboxgl.Popup().setHTML(`${data.city.name}`))
                .addTo(map);
        });
    })




})









