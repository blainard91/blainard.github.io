

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    (function getData() {
        var url = "dropd.json";
        getJSON(url).then(function (data) {
            console.log(data);

            var page = data.page;

            var heading = data["location"]["city"];
            var state = data["location"]["state"];
            var temp = data["current_observation"]["feelslike_f"];
            var weather = data["current_observation"]["weather"];
            var precipToday = data["current_observation"]["precip_today_in"];
            var windmph = data["current_observation"]["wind_mph"];

            var cityDisplay = document.getElementById('cityDisplay');

            var currentTemp = document.getElementById('currentTemp');

            var summary = document.getElementById('summary');

            var precipitation = document.getElementById('precipitation');

            var windSpeed = document.getElementById('windSpeed');

            cityDisplay.innerHTML = city + ', ' + state;
            currentTemp.innerHTML = temp + '&deg; F';
            summary.innerHTML = weather;
            precipitation.innerHTML = 'Precipitation: ' + precipToday + ' inches';
            windSpeed.innerHTML = 'Wind Speed: ' + windmph + ' mph';

            document.getElementById("cover").classList.add('fadeout');

        });


    });

    function fetchData(grab) {
        var url = "/blainard91.github.io/Weather/Javascript/weather.json";
        getJSON(url).then(function (data) {
            console.log(data);
            var city = data[grab]["City"];
            var state = data[grab]["State"];
            var high = data[grab]["High"];

            var location = document.getElementById('location');
            var temp = document.getElementById('temp');

            location.innerHTML = city + ', ' + state;
            temp.innerHTML = high;

        });

        // A function for changing a string to TitleCase
        function toTitleCase(str) {
            return str.replace(/\w+/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
    };
