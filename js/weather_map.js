// // LOAD INITIAL MAP AND FORECAST
// $(document).ready(function () {


// // GET DATA FOR CITY NAME ENTERED
//     $.get("http://api.openweathermap.org/data/2.5/forecast", {
//         APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
//         q: "San Antonio",
//         units: "imperial"
// // WHEN DONE -----
//     }).done(function (data) {
//         // console.log(data)
//
//         for (var i = 0; i < 40; i += 8) {
//
//
//             $('.row').append(`<div class="col-2 ml-auto mr-auto">
//                             <div class="card">
//                                 <h5 class="card-header text-center">${data.list[i].dt_txt.substring(0, 10)}</h5>
//                                 <div class="card-body">
//                                     <div class="card-text">
//                                         <div class="card-center">
//                                         <div class="temps" style="line-height: 3">
//                                            <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}F</p>
//                                         </div>
//                                         <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' style="width: 30px; height: 30px">
//                                         </div>
//                                     <hr>
//                                     <p>Description: <b>${data.list[i].weather[0].description}</b></p>
//                                     <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
//                                     <hr>
//                                     <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
//                                     <hr>
//                                     <p>Pressure: <b>${data.list[i].main.pressure}</b></p>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>`);
//         }
//
//         $('#cityName').append(`<p>Current City: ${data.city.name}`);
//
//
//         // console.log(data.city.coord)
//
//         mapboxgl.accessToken = 'pk.eyJ1IjoiaG9kZ2VzY29keTAwIiwiYSI6ImNrejJ3ZWhmcjAweGoybm55Z3lrNTlyNWgifQ.2Y_WT2W1PWBdIJCuK9azig';
//
//         var map = new mapboxgl.Map({
//             container: 'map', // container ID
//             style: 'mapbox://styles/mapbox/streets-v11', // style URL
//             center: data.city.coord, // starting position [lng, lat]
//             zoom: 10 // starting zoom
//         });
//         let marker = new mapboxgl.Marker()
//             .setLngLat(data.city.coord)
//             .setPopup(new mapboxgl.Popup().setHTML(`${data.city.name}`)) // add popup
//             .addTo(map);
//
//
//
//
//     })
// // })
//
//

// CLICK ON SEARCH OF CITY IN INPUT
// $('#submit').click(function () {
//
//
//     $('.row').html('')
//     var city = $('#city').val();
//
//
//     // GET DATA FOR CITY NAME ENTERED
//     $.get("http://api.openweathermap.org/data/2.5/forecast", {
//         APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
//         q: city,
//         units: "imperial"
// // WHEN DONE -----
//     }).done(function (data) {
//
//         $('#cityName').html('');
//         $('#cityName').append(`<p>Current City: ${data.city.name}`);
//         for (var i = 0; i < 40; i += 8) {
//
//             $('.row').append(`<div class="col-2 ml-auto mr-auto">
//                             <div class="card">
//                                 <h5 class="card-header text-center">${data.list[i].dt_txt.substring(0, 10)}</h5>
//                                 <div class="card-body">
//                                     <div class="card-text">
//                                         <div class="card-center">
//                                         <div class="temps" style="line-height: 3">
//                                            <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}F</p>
//                                         </div>
//                                         <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' style="width: 30px; height: 30px">
//                                         </div>
//                                     <hr>
//                                     <p>Description: <b>${data.list[i].weather[0].description}</b></p>
//                                     <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
//                                     <hr>
//                                     <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
//                                     <hr>
//                                     <p>Pressure: <b>${data.list[i].main.pressure}</b></p>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>`);
//         }
//
//
//         // console.log(data.city.coord)
//
//         mapboxgl.accessToken = 'pk.eyJ1IjoiaG9kZ2VzY29keTAwIiwiYSI6ImNrejJ3ZWhmcjAweGoybm55Z3lrNTlyNWgifQ.2Y_WT2W1PWBdIJCuK9azig';
//
//         var map = new mapboxgl.Map({
//             container: 'map', // container ID
//             style: 'mapbox://styles/mapbox/streets-v11', // style URL
//             center: data.city.coord, // starting position [lng, lat]
//             zoom: 10 // starting zoom
//         });
//         let marker = new mapboxgl.Marker()
//             .setLngLat(data.city.coord)
//             .setPopup(new mapboxgl.Popup().setHTML(`${data.city.name}`)) // add popup
//             .addTo(map);
//
//
//     })
// })


//         function onDragEnd() {
//             var lngLat = marker.getLngLat();
//             coordinates.style.display = 'block';
//             coordinates.innerHTML = `Longitude: ${lngLat.lng.toFixed(4)}<br />Latitude: ${lngLat.lat.toFixed(4)}`;
//             console.log(lngLat)
//
//             $.get("http://api.openweathermap.org/data/2.5/forecast", {
//                 APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
//                 q: ,
//                 units: "imperial"
// // WHEN DONE -----
//             }).done(function (data) {
//                 console.log(data)
//                 $('#cityName').append(`<p>Current City: ${data.city.name}`);
//
//                 for (var i = 0; i < 40; i += 8) {
//
//
//                     $('.row').append(`<div class="col-2 ml-auto mr-auto">
//                             <div class="card">
//                                 <h5 class="card-header text-center">${data.list[i].dt_txt.substring(0, 10)}</h5>
//                                 <div class="card-body">
//                                     <div class="card-text">
//                                         <div class="card-center">
//                                         <div class="temps" style="line-height: 3">
//                                            <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}F</p>
//                                         </div>
//                                         <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' style="width: 30px; height: 30px">
//                                         </div>
//                                     <hr>
//                                     <p>Description: <b>${data.list[i].weather[0].description}</b></p>
//                                     <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
//                                     <hr>
//                                     <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
//                                     <hr>
//                                     <p>Pressure: <b>${data.list[i].main.pressure}</b></p>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>`);
//                 }
//             })
//
//
//
//
//         }
//         marker.on('dragend', onDragEnd);
//     })

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
                                           <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}F</p>
                                        </div>
                                        <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' style="width: 30px; height: 30px">
                                        </div>
                                    <hr>
                                    <p>Description: <b>${data.list[i].weather[0].description}</b></p>
                                    <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
                                    <hr>
                                    <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
                                    <hr>
                                    <p>Pressure: <b>${data.list[i].main.pressure}</b></p>
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
        zoom: 10
    });

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(data.city.coord)
        .setPopup(new mapboxgl.Popup().setHTML(`${data.city.name}`))
        .addTo(map);



//
//     const geocoder = new MapboxGeocoder({
//         placeholder: 'Search your favorite spot',
//         // Initialize the geocoder
//         accessToken: mapboxgl.accessToken, // Set the access token
//         mapboxgl: mapboxgl, // Set the mapbox-gl instance
//         marker: true // Do not use the default marker style,
//
//     });
//
// // Add the geocoder to the map
//     map.addControl(geocoder);
//
//     geocoder.on('result', (event) => {
//         var lngLat = marker.getLngLat();
//         console.log(lngLat)
//         var lat = lngLat.lat
//         var lon = lngLat.lng
//
//
//         $.get("http://api.openweathermap.org/data/2.5/forecast", {
//             APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
//             lat:  lat ,
//             lon:  lon ,
//             units: "imperial"
// // WHEN DONE -----
//         }).done(function (data) {
//             console.log(data)
//             $("#cityName").html('')
//             $('#cityName').append(`<p>Current City: ${data.city.name}`);
//             $('.row').html('')
//
//             for (var i = 0; i < 40; i += 8) {
//
// /////////////////////////////////////// GENERATE WEATHER CARDS ///////////////////////////////////////
//                 $('.row').append(`<div class="col-2 ml-auto mr-auto">
//                             <div class="card">
//                                 <h5 class="card-header text-center">${data.list[i].dt_txt.substring(0, 10)}</h5>
//                                 <div class="card-body">
//                                     <div class="card-text">
//                                         <div class="card-center">
//                                         <div class="temps" style="line-height: 3">
//                                            <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}F</p>
//                                         </div>
//                                         <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' style="width: 30px; height: 30px">
//                                         </div>
//                                     <hr>
//                                     <p>Description: <b>${data.list[i].weather[0].description}</b></p>
//                                     <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
//                                     <hr>
//                                     <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
//                                     <hr>
//                                     <p>Pressure: <b>${data.list[i].main.pressure}</b></p>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>`);
//             }
//         })
//
//     });






/////////////////////////////////////// DRAGGABLE MARKER THAT RETURNS LNGLAT ///////////////////////////////////////
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        var lat = lngLat.lat
        var lon = lngLat.lng
        console.log(lngLat)




        map.flyTo({
// These options control the ending camera position: centered at
// the target, at zoom level 9, and north up.
            center: lngLat,
            zoom: 11,
            bearing: 0,

// These options control the flight curve, making it move
// slowly and zoom out almost completely before starting
// to pan.
            speed: 0.5, // make the flying slow
            curve: 1, // change the speed at which it zooms out

// This can be any easing function: it takes a number between
// 0 and 1 and returns another number between 0 and 1.
            easing: (t) => t,

// this animation is considered essential with respect to prefers-reduced-motion
            essential: true
        });





        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
            lat:  lat ,
            lon:  lon ,
            units: "imperial"
// WHEN DONE -----
        }).done(function (data) {
            console.log(data)
            $("#cityName").html('')
            $('#cityName').append(`<p>Current City: ${data.city.name}`);
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
                                           <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}F</p>
                                        </div>
                                        <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' style="width: 30px; height: 30px">
                                        </div>
                                    <hr>
                                    <p>Description: <b>${data.list[i].weather[0].description}</b></p>
                                    <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
                                    <hr>
                                    <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
                                    <hr>
                                    <p>Pressure: <b>${data.list[i].main.pressure}</b></p>
                                    </div>
                                </div>
                            </div>
                            </div>`);
            }
        })

        }


    marker.on('dragend', (onDragEnd));



    // GEOCODER GEODER GEOCODER
const geocoder = new MapboxGeocoder({
    placeholder: 'Search your favorite spot',
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false // Do not use the default marker style,

});

// Add the geocoder to the map
map.addControl(geocoder);






geocoder.on('result', (event) => {
    var lngLat = marker.getLngLat();
    console.log(lngLat)
    var lat = lngLat.lat
    var lon = lngLat.lng



    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
        lat:  lat ,
        lon:  lon ,
        units: "imperial"
// WHEN DONE -----
    }).done(function (data) {
        console.log(data)
        $("#cityName").html('')
        $('#cityName').append(`<p>Current City: ${data.city.name}`);
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
                                           <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}F</p>
                                        </div>
                                        <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' style="width: 30px; height: 30px">
                                        </div>
                                    <hr>
                                    <p>Description: <b>${data.list[i].weather[0].description}</b></p>
                                    <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
                                    <hr>
                                    <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
                                    <hr>
                                    <p>Pressure: <b>${data.list[i].main.pressure}</b></p>
                                    </div>
                                </div>
                            </div>
                            </div>`);
        }
    })

});
})






// // GEOCODER GEODER GEOCODER
// const geocoder = new MapboxGeocoder({
//     placeholder: 'Search your favorite spot',
//     // Initialize the geocoder
//     accessToken: mapboxgl.accessToken, // Set the access token
//     mapboxgl: mapboxgl, // Set the mapbox-gl instance
//     marker: true // Do not use the default marker style,
//
// });
//
// // Add the geocoder to the map
// map.addControl(geocoder);
//
// geocoder.on('result', (event) => {
//     var lngLat = marker.getLngLat();
//     console.log(lngLat)
//     var lat = lngLat.lat
//     var lon = lngLat.lng
//
//
//     $.get("http://api.openweathermap.org/data/2.5/forecast", {
//         APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
//         lat:  lat ,
//         lon:  lon ,
//         units: "imperial"
// // WHEN DONE -----
//     }).done(function (data) {
//         console.log(data)
//         $("#cityName").html('')
//         $('#cityName').append(`<p>Current City: ${data.city.name}`);
//         $('.row').html('')
//
//         for (var i = 0; i < 40; i += 8) {
//
// /////////////////////////////////////// GENERATE WEATHER CARDS ///////////////////////////////////////
//             $('.row').append(`<div class="col-2 ml-auto mr-auto">
//                             <div class="card">
//                                 <h5 class="card-header text-center">${data.list[i].dt_txt.substring(0, 10)}</h5>
//                                 <div class="card-body">
//                                     <div class="card-text">
//                                         <div class="card-center">
//                                         <div class="temps" style="line-height: 3">
//                                            <p style="font-size: 20px; font-weight: bolder">${data.list[i].main.temp_min}F</p>
//                                         </div>
//                                         <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' style="width: 30px; height: 30px">
//                                         </div>
//                                     <hr>
//                                     <p>Description: <b>${data.list[i].weather[0].description}</b></p>
//                                     <p>Humidity: <b>${data.list[i].main.humidity} %</b></p>
//                                     <hr>
//                                     <p>Wind: <b>${data.list[i].wind.speed} mph</b></p>
//                                     <hr>
//                                     <p>Pressure: <b>${data.list[i].main.pressure}</b></p>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>`);
//         }
//     })
//
// });
//
//
//
//
//
//
//
//
