
$(document).ready(function (){
    setTimeout(loading, 4000)
    setTimeout(cards, 4000)
})
function loading (){
    $('#load').remove()
}
function cards(){
    $(".row").toggleClass('roll')
}






///////////////////////////////////////// GENERATE FIRST MAP/WEATHER FOR SAN ANTONIO ///////////////////////////////////////
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
    q: "San Antonio",
    units: "imperial"
// WHEN DONE -----
}).done(function (data) {
    // console.log(data)
    $('#cityName').append(`<p>Current City: ${data.city.name}`);


    for (var i = 0; i < 40; i += 8) {

/////////////////////////////////////// GENERATE WEATHER CARDS ///////////////////////////////////////
        $('.row').append(`<div class="col-2 ml-auto mr-auto">
                            <div class="card">
                                <h5 class="card-header text-center">${data.list[i].dt_txt.substring(0, 10)}</h5>
                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="card-center">
                                        <div class="temps" style="line-height: 3">
                                           <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}°F</p>
                                        </div>
                                        <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png'>
                                        </div>
                                    <hr>
                                    <p>Description: <br><b>${data.list[i].weather[0].description}</b></p>
                                    <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
                                    <hr>
                                    <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
                                   
                                    </div>
                                </div>
                            </div>
                            </div>`);
    }



    /////////////////////////////////////// GENERATE MAP ///////////////////////////////////////
    mapboxgl.accessToken = 'pk.eyJ1IjoiaG9kZ2VzY29keTAwIiwiYSI6ImNrejJ3ZWhmcjAweGoybm55Z3lrNTlyNWgifQ.2Y_WT2W1PWBdIJCuK9azig';
    var coordinates = document.getElementById('coordinates');
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: data.city.coord,
        zoom: 12
    });

    var marker = new mapboxgl.Marker({
        color: 'red',
        draggable: true,

    })

        .setLngLat(data.city.coord)
        .addTo(map);


/////////////////////////////////////// DRAGABLE MARKER THAT RETURNS LNGLAT ///////////////////////////////////////
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        // console.log(lngLat)
        var lat = lngLat.lat
        var lon = lngLat.lng
        // console.log('DRAG MARKER LNGLAT ' + lngLat)


        map.flyTo({
            center: lngLat,
            zoom: 12,
            bearing: 0,
            speed: 0.2,
            curve: 9,
            easing: (t) => t,
            essential: true
        });


        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
            lat: lat,
            lon: lon,
            units: "imperial"
// WHEN DONE -----
        }).done(function (data) {
            // console.log('DRAG MARKER CITY DATA ' + data)
            $("#cityName").html('')
            $('#cityName').append(`<p>Current Marker Location: ${data.city.name}`);
            $('.row').html('')

            for (var i = 0; i < 40; i += 8) {

/////////////////////////////////////// GENERATE WEATHER CARDS ///////////////////////////////////////
                $('.row').append(`<div class="col-2 ml-auto mr-auto">
                            <div class="card">
                                <h5 class="card-header text-center">${data.list[i].dt_txt.substring(0, 10)}</h5>
                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="card-center">
                                        <div class="temps" style="line-height: 3">
                                           <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}°F</p>
                                        </div>
                                        <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png'>
                                        </div>
                                    <hr>
                                    <p>Description: <br><b>${data.list[i].weather[0].description}</b></p>
                                    <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
                                    <hr>
                                    <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
                                    
                                    </div>
                                </div>
                            </div>
                            </div>`);
            }
        })

    }


    marker.on('dragend', (onDragEnd));


    ///////////////////////   GEOCODER    ///////////////////////
    const geocoder = new MapboxGeocoder({
        placeholder: 'Search your favorite spot',
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false // Do not use the default marker style
    });

// Add the geocoder to the map
    map.addControl(geocoder);

    // After the map style has loaded on the page,
// add a source layer and default styling for a single point
    map.on('load', () => {
        map.addSource('single-point', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: []
            }
        });

        map.addLayer({
            id: 'point',
            source: 'single-point',
            type: 'circle',
            paint: {
                'circle-radius': 10,
                'circle-color': '#448ee4'
            }
        });

        // Listen for the `result` event from the Geocoder
        // `result` event is triggered when a user makes a selection
        //  Add a marker at the result's coordinates
        geocoder.on('result', (event) => {
            map.getSource('single-point').setData(event.result.geometry);
            console.log(event)
            var lon = event.result.center[0]
            var lat = event.result.center[1]


            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
                lat: lat,
                lon: lon,
                units: "imperial"
// WHEN DONE -----
            }).done(function (event) {

                $("#cityName").html('')
                $('#cityName').append(`<p>Current Marker Location: ${event.city.name}`);
                $('.row').html('')


                for (var i = 0; i < 40; i += 8) {

/////////////////////////////////////// GENERATE WEATHER CARDS ///////////////////////////////////////
                    $('.row').append(`<div class="col-2 ml-auto mr-auto">
                            <div class="card">
                                <h5 class="card-header text-center">${event.list[i].dt_txt.substring(0, 10)}</h5>
                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="card-center">
                                        <div class="temps" style="line-height: 3">
                                           <p style="font-size: 20px; font-weight: bolder">${event.list[i].main.temp_min}°F</p>
                                        </div>
                                        <img src='http://openweathermap.org/img/w/${event.list[i].weather[0].icon}.png'>
                                        </div>
                                    <hr>
                                    <p>Description: <br><b>${event.list[i].weather[0].description}</b></p>
                                    <p>Humidity: <b>${event.list[i].main.humidity} %</b></p>
                                    <hr>
                                    <p>Wind: <b>${event.list[i].wind.speed} mph</b></p>
                                </div>
                            </div>
                            </div>`);
                }
            })

        });
    });
});



