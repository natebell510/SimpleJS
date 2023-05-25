'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
    const html = `
     <article class="country ${className}">
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
}

const getCountryDataAndNeighbour = function (country) {


    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//CORS cross origin resource sharing
    request.send();

//emit load event
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        //render country1
        renderCountryData(data);

        //get neighbour county
        const [neighbour] = data.borders;
        if(!neighbour)return;

        //AJAX call2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
//CORS cross origin resource sharing
        request2.send();

        request2.addEventListener('load', function (){
           const data2 = JSON.parse(this.responseText);
           console.log(data2);
           renderCountryData(data2[0], neighbour);
        });

        //callback hell - nested callback that should be sequenced



    });
};

//getCountryDataAndNeighbour('usa');


const request3 = fetch( `https://restcountries.com/v3.1/alpha/usa`);
console.log(request3);


/*
Promise and Fetch API
Promise - object that is used as placeholder for future result in async operation
container for future value

 */


//2:22




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
