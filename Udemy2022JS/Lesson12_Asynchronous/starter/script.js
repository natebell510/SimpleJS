'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


/*
setTimeout(() => {
    console.log('1 sec passed')
    setTimeout(() => {
        console.log('1 sec passed')
        setTimeout(() => {
            console.log('1 sec passed')
            setTimeout(() => {
                console.log('1 sec passed')
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
 */


/*'
client -> server
protocol/domainName/resource
DNS -> domainName === IP address/portNumber
80 for HTTP, 443 for HTTPS
TCP/IP socket connection established between client and server
HTTP request hyper text transfer protocol ->
start line: contains http method (GET, POST, DELETE), request target, version
http request header
request body (data to server)
http vs https - encrypted with ssl
http response -> start line - code, message
                -> header
                -> body
TCP/IP - packets - TCP will assemble all packets into response, message arrives quickly. <client-><-server>

*/


///////////////////////////////////////

/*
const getCountryData = function (country) {


    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//CORS cross origin resource sharing
    request.send();

//emit load event
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const html = `
     <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} mln people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
            <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
          </div>
        </article>
    `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
}
getCountryData('usa');
getCountryData('canada');

 */

const renderCountryData = function (data, className = '') {
    const flagSrc = data.flags ? Object.values(data.flags)[1] : '';
    const countryName = data.name ? data.name.common : 'Country Name Not Available';
    const countryLanguages = data.languages ? Object.values(data.languages) : ['Language Not Available'];
    const countryCurrencies = data.currencies ? Object.keys(data.currencies)[0] : 'Currency Not Available';


    const html = `
     <article class="country ${className}">
          <img class="country__img" src="${flagSrc}" />
          <div class="country__data">
            <h3 class="country__name">${countryName}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} mln people</p>
            <p class="country__row"><span>🗣️</span>${countryLanguages}</p>
            <p class="country__row"><span>💰</span>${countryCurrencies}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

}


const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}


const getCountryDataAndNeighbour = function (country) {


    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//CORS cross origin resource sharing
    request.send();

//emit load event
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data[0]);
        //render country1
        renderCountryData(data[0]);

        //get neighbour county
        const [neighbour] = data[0].borders;
        if (!neighbour) return;

        //AJAX call2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
//CORS cross origin resource sharing
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            renderCountryData(data2[0], neighbour);
        });

        //callback hell - nested callback that should be sequenced


    });
};

//getCountryDataAndNeighbour('usa');

/*
Promise and Fetch API
Promise - object that is used as placeholder for future result in async operation
container for future value
time sensitive
consume Promise (should exist)
lifecycle of the Promise:
pending (before furure value) -> async task -> settled (fulfilled, rejected [async task is finished]) -> consume promise



 */


//const request3 = fetch( `https://restcountries.com/v3.1/alpha/usa`);
//console.log(request3);

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};


const getCountryData = function (country) {


    //country 1
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found!')
        .then(data => {
            renderCountryData(data[0])
            const neighbour = data[0].borders[0];
            if (!neighbour) throw new Error('No neighbour found!');

            //country 2
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found!')
        })
        .then(data => renderCountryData(data[0], 'neighbour'))
        .catch(err => {
            renderError(`Something went wrong! ${err.message}`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
            console.log('Finally block is executed!')
        });

};
//getCountryData('australia');

//https://www.youtube.com/watch?v=B7TTlTHNU5U&list=PLEcZUKhPzlA2ZcVaNJdbWqzuJPIKGbeVA&index=23&ab_channel=ViralKingz 3:15
//const openUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
const whereAmI = function (lat, lng) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Problem with geocoding! ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            //console.log(data.address.country);
            console.log(`You are in ${data.address.city}, ${data.address.country}`);
            const name = data.address.country;

            return fetch(`https://restcountries.com/v3.1/name/${name}`)
        }).then(response => {
        if (!response.ok) {
            throw new Error(`Country not found ${response.status}`);
        }
        return response.json();
    })
        .then(data => {
            //renderCountryData(data[0]);
            console.log(data[0].name.official)
            getCountryData(data[0].name.official);
        })
        .catch(err => console.log(`${err.message}`));
}


//turn it data into country name
const locationDiv = document.querySelector('.location');
const getLoc = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationDiv.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    locationDiv.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    whereAmI(position.coords.latitude, position.coords.longitude);

}

//TODO this original function
/*
btn.addEventListener('click', function () {
    getLoc();
    btn.disabled = true;
});
 */

//geocode.xyz
//reverse geocoding api -> https://nominatim.org/release-docs/develop/api/Reverse/


//microtask queue
//callback queue
//webapi - fetch, setTimeout, DOM


//code outside of any callback runs first, Promise and then timer
//callback of Promise will be in microtask queue and will have priority over regular callback functions,
// will be executed first, before timer, but after outside code of any callback

/*
console.log(`Test start`);
setTimeout(()=> console.log(`0 sec timer`),0)
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolve promise 2').then(res => {
    //simulate long run
    for(let i = 0; i< 1000;i++){
        console.log(res);
    }

});

console.log('Test end');
 */

/*
const lotteryPromise = new Promise(function (resolve, reject) {

    console.log('Lottery draw is in process!')
    setTimeout(function () {
        if(Math.random() >= 0.5){
            resolve('You WIN!'); //fulfilled promise
        }else {
            reject('You LOST!');
        }
    },2000)
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//Promisifying setTimout
const wait = function (seconds) {
    return new Promise(function(resolve){
        setTimeout(resolve,seconds * 1000);
    })
};
wait(2).then(() => {
    console.log('Waited for 2 seconds');
    return wait(1);
}).then(() => console.log('waited for 1 second'));


Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').then(x => console.error(x));

 */


//https://www.youtube.com/watch?v=B7TTlTHNU5U&list=PLEcZUKhPzlA2ZcVaNJdbWqzuJPIKGbeVA&index=27&ab_channel=ViralKingz  4.22


const getPosition = function () {
    return new Promise(function (resolve, reject) {
        /*
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position), err =>{
                reject(err)
            }
        });
         */
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

//getPosition().then(pos => console.log(pos));

const whereIam2 = function () {
    getPosition().then(pos => {
        const {latitude: lat, longitude: lng} = pos.coords;
        return fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
    })

        .then(response => {
            if (!response.ok) {
                throw new Error(`Problem with geocoding! ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            //console.log(data.address.country);
            console.log(`You are in ${data.address.city}, ${data.address.country}`);
            const name = data.address.country;

            return fetch(`https://restcountries.com/v3.1/name/${name}`)
        }).then(response => {
        if (!response.ok) {
            throw new Error(`Country not found ${response.status}`);
        }
        return response.json();
    })
        .then(data => {
            //renderCountryData(data[0]);
            console.log(data[0].name.official)
            getCountryData(data[0].name.official);
        })
        .catch(err => console.log(`${err.message}`));

}
//btn.addEventListener('click', whereIam2);


/*
//coding challenge
const imageContainer = document.querySelector('.images');

const createImage = function (imagePath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imagePath;

        img.addEventListener('load', function () {
            imageContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};
const path1 = 'img/img-1.jpg';

const wait = function (seconds) {
    return new Promise(function(resolve){
        setTimeout(resolve,seconds * 1000);
    })
};


let currentImg;
const errorContainer = document.querySelector('.error');
createImage(path1).then(img => {
    currentImg = img;
    console.log('Image 1 loaded')
    return wait(2)
}).then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg')
})
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg')
}).then(img => {
    currentImg = img;
    console.log('Image 3 loaded');
    return wait(2);
})
    .catch(err => {
    errorContainer.insertAdjacentText('beforeend', err);
});
 */


//async await
const getPosition2 = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};
const whereAmI3 = async function (country) {
    try{
        const pos = await getPosition2();
        const {latitude: lat, longitude: lng} = pos.coords;

        //reverse geocoding
        const resGeo = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
        if(!resGeo) throw new Error('Problem with reverse geocoding.')
        const dataGeo = await resGeo.json();

        //country data
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.address.country}`);
        if(!res) throw  new Error('problem with rescountries call.')
        const data = await res.json();
        renderCountryData(data[0]);



    }catch (e){
        console.error(e);
        renderError(e.message);
    }

};
//whereAmI3();

/*
(async function(){
    try {
        const city = await whereAmI3();
        console.log(city);
    }catch (err){
        console.error(err.message);
    }
    console.log('finish')
})();
 */


//iffy
/*
(async function(){}){};
 */


//return 3 Promises Promise.all()
//if one Promise rejects, all Promises will be rejected
const get3countries = async function(c1, c2, c3){
    try {
       // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
        //const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
       // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`)
        ]);

        console.log(data.map(x => x[0].capital));

    }catch (err){
        console.error(err.message)
    }
}

get3countries('usa','canada','portugal');

//https://www.youtube.com/watch?v=B7TTlTHNU5U&list=PLEcZUKhPzlA2ZcVaNJdbWqzuJPIKGbeVA&index=27&ab_channel=ViralKingz  5.42



