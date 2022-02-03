

//////////////// LOADING SCREEN
$(document).ready(function (){
    setTimeout(loading, 4000)

})
function loading (){
    $('#load').remove()
}








///////////////////////////////////////// GENERATE FIRST MAP/WEATHER FOR SAN ANTONIO ///////////////////////////////////////
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: WEATHER_TOKEN,
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
    mapboxgl.accessToken = MAPBOX_TOKEN;
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
            APPID: WEATHER_TOKEN,
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
            console.log(event.result)
            var lon = event.result.center[0]
            var lat = event.result.center[1]


            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: WEATHER_TOKEN,
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


























///////////////////////// CROSSWORD /////////////////////////
//Globals
var currentTextInput;
var puzzleArrayData;
//Loads the Crossword
function initializeScreen(){
    var puzzleTable = document.getElementById("puzzle");
    puzzleArrayData = preparePuzzleArray();
    for ( var i = 0; i < puzzleArrayData.length ; i++ ) {
        var row = puzzleTable.insertRow(-1);
        var rowData = puzzleArrayData[i];
        for(var j = 0 ; j < rowData.length ; j++){
            var cell = row.insertCell(-1);
            if(rowData[j] != 0){
                var txtID = String('txt' + '_' + i + '_' + j);
                cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
            }else{
                cell.style.backgroundColor  = "black";
            }
        }
    }
    addHint();
}
//Adds the hint numbers
function addHint(){
    document.getElementById("txt_0_9").placeholder = "3";
    document.getElementById("txt_4_4").placeholder = "2";
    document.getElementById("txt_3_1").placeholder = "1";
    document.getElementById("txt_4_0").placeholder = "5";
    document.getElementById("txt_1_6").placeholder = "4";
    document.getElementById("txt_7_3").placeholder = "6";
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
    currentTextInput = txtID123;
}
//Returns Array
function preparePuzzleArray(){
    var items = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 'g'],
        [0, 0, 0, 0, 0, 0, 'f', 'o', 'u', 'r' ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 'e'],
        [0, 'w', 0, 0, 0, 0, 0, 0, 0, 'a'],
        ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'],
        [0, 't', 0, 0, 'c', 0, 0, 0, 0, 0],
        [0, 'e', 0, 0, 'r', 0, 0, 0, 0, 0],
        [0, 'r', 0, 'p', 'u', 'b', 'g', 0, 0, 0],
        [0, 0, 0, 0, 'b', 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    return items;
}
//Clear All Button
function clearAllClicked(){
    currentTextInput = '';
    var puzzleTable = document.getElementById("puzzle");
    puzzleTable.innerHTML = '';
    initializeScreen();
}
//Check button
function checkClicked(){
    for ( var i = 0; i < puzzleArrayData.length ; i++ ) {
        var rowData = puzzleArrayData[i];
        for(var j = 0 ; j < rowData.length ; j++){
            if(rowData[j] != 0){
                var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
                if(selectedInputTextElement.value != puzzleArrayData[i][j]){
                    selectedInputTextElement.style.backgroundColor = 'yellow';

                }else{
                    selectedInputTextElement.style.backgroundColor = 'green';
                }
            }
        }
    }
}

//Solve Button
function solveClicked(){
    if (currentTextInput != null){
        var temp1 = currentTextInput;
        var token = temp1.split("_");
        var row = token[1];
        var column = token[2];

        // Print elements on top
        for(j = row; j >= 0; j--){
            if(puzzleArrayData[j][column] != 0){
                document.getElementById('txt' + '_' + j + '_' + column).value = puzzleArrayData[j][column];
            }else break;
        }
        // Print elements on right
        for(i = column; i< puzzleArrayData[row].length; i++){
            if(puzzleArrayData[row][i] != 0){
                document.getElementById('txt' + '_' + row + '_' + i).value = puzzleArrayData[row][i];
            }else break;
        }

        // Print elements below
        for(m = row; m< puzzleArrayData.length; m++){
            if(puzzleArrayData[m][column] != 0){
                document.getElementById('txt' + '_' + m + '_' + column).value = puzzleArrayData[m][column];
            }else break;
        }
        // Print elements on left
        for(k = column; k >= 0; k--){
            if(puzzleArrayData[row][k] != 0){
                document.getElementById('txt' + '_' + row + '_' + k).value = puzzleArrayData[row][k];
            }else break;
        }
        // Done!

    }
}


