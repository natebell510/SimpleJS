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

let map, mapEvent;

class App {

    #map;
    #mapEvent;


    constructor() {
        this._getPosition();

    }


    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function () {
                alert('Could not get position.');
            })
        }
    }

    _loadMap(position) {
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        // console.log(`https://www.google.com/maps/@${latitude},${longitude}z`);

        const coords = [latitude, longitude];
        //from leaflet - map is html element that has id of map
       this.#map = L.map('map').setView(coords, 12);


        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        L.marker(coords).addTo(this.#map)
            .bindPopup('Point on a map.<br> What?')
            .openPopup();


        //special map event
        //handling clicks on map
        this.#map.on('click', function (mapE) {
            this.#mapEvent = mapE;
            form.classList.remove('hidden');
            //focus method leads user to typing right away
            inputDistance.focus();

        });
    }

    _showForm(){
    }

    _toggleElevationField(){

    }

    _newWorkout(){

    }

}

const app = new App();
//app._getPosition();



//https://www.youtube.com/watch?v=1o3ZLH6b_lU&list=PLEcZUKhPzlA2ZcVaNJdbWqzuJPIKGbeVA&index=14&ab_channel=ViralKingz
//8:59

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //clear input fields
    inputDistance.value = inputDuration.value = inputElevation.value = inputCadence.value = '';

    //display marker
    const {lat, lng} = mapEvent.latlng;
    //adds marker to the map
    L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup'
    }))
        .setPopupContent('Workout!')
        .openPopup();
});

inputType.addEventListener('change', function (e) {
    inputElevation.closest('.form__row--hidden').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');

});

//data is the most fundamental part of the application
//9:39