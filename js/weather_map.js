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

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
        q: "San Antonio",
        units: "imperial"
// WHEN DONE -----
    }).done(function (data) {
        // console.log(data)
        $('#cityName').append(`<p>Current City: ${data.city.name}`);

        for (var i = 0; i < 40; i += 8) {


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


        function onDragEnd() {
            var lngLat = marker.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML = `Longitude: ${lngLat.lng.toFixed(4)}<br />Latitude: ${lngLat.lat.toFixed(4)}`;
            console.log(lngLat)

            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: "dc7b0ebe3a51ce3421b1dfcff8a97724",
                q: ,
                units: "imperial"
// WHEN DONE -----
            }).done(function (data) {
                console.log(data)
                $('#cityName').append(`<p>Current City: ${data.city.name}`);

                for (var i = 0; i < 40; i += 8) {


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
        marker.on('dragend', onDragEnd);
    })









