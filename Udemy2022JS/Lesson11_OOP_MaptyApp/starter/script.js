'use strict';


/*
How to plan Web project:
- Planning:
1. user stories - what user is intended to do with app. As user, I want to perform action A
2. features - functionality
3. flowchart - representation of flow
4. architecture - what holds code together
- Development


 */


// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const {latitude} = position.coords;
        const {longitude} = position.coords;
       // console.log(`https://www.google.com/maps/@${latitude},${longitude}z`);

        const coords = [latitude, longitude];
        //from leaflet
        const map = L.map('map').setView(coords, 12);


        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
            .bindPopup('I am here.<br> Do you want to save it?')
            .openPopup();
        //special map event
        map.on('click', function (mapEvent){
            const {lat, lng} = mapEvent.latlng;
            //adds marker to the map
            L.marker([lat,lng]).addTo(map).bindPopup(L.popup({
                maxWidth : 250,
                minWidth : 100,
                autoClose : false,
                closeOnClick: false,
                className : 'running-popup'
            }))
                .setPopupContent('Selling Drugs')
                .openPopup();
        });

    }, function () {
        alert('Could not get your position!')
    });
}
//49.2159845,29.0208366,13z

//1:05
