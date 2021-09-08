var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear()
var date = month + "/" + day + "/" + year
var currentDate = document.getElementById('searchDate');
var currentDate = date;
var city = document.getElementById('currentCity');

//var searchButton = document.getElementsByID('searchBtn');
    

function getSearchValue() {
    var inputValue = document.getElementById('field').value;
    
    inputValue = inputValue.replace(/\s+/g, '-').toLowerCase();
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputValue + '&units=imperial&appid=7469b383f606343a74b5e386f6d67047';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
            })
        .then(function (data) {
            var latitude = data.coord.lat
            var longitude = data.coord.lon
            var name = document.createElement('li');
            name.textContent = data.name;
            city.appendChild(name);

            var newUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=7469b383f606343a74b5e386f6d67047';
            fetch(newUrl)
                .then(function (response) {
                    return response.json();
                    })
                .then(function (data) {
                    console.log(data)
                
                    var temperature = document.createElement('li');
                    temperature.textContent = 'Temp: ' + data.current.temp + '°F';
                    city.appendChild(temperature);
                
                    var listItem = document.createElement('li');
                    listItem.textContent = 'Wind: ' + data.current.wind_speed + ' MPH';
                    city.appendChild(listItem);

                    var listItem = document.createElement('li');
                    listItem.textContent = 'Humidity: ' + data.current.humidity + ' %';
                    city.appendChild(listItem);

                    var listItem = document.createElement('li');
                    listItem.textContent = 'UV Index: ' + data.current.uvi;
                    city.appendChild(listItem);
                });
        });
};        

   

//searchButton.addEventListener('click', getSearchValue);
    //searchButton.addEventListener('click', getApi);



// fetch('https://api.github.com/orgs/twitter/public_members')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Public Members: Raw data \n----------');
//     console.log(data);
//   });

// fetch('https://api.github.com/orgs/twitter/repos')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Repositories: Names only \n----------');
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].name);
//     }
//   });