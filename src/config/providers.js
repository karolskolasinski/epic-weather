/*the function fetchWeather must return an array that contains, in order:
* forecast[0] = location;
* forecast[1] = temperature;
* forecast[2] = weather description;
* forecast[3] = time of day;
* */


const providers = [
    {
        name: 'openweathermap',
        apiKey: '3cf166d1c772fa916a78a5a31dfd1b03',
        baseUrl: 'https://api.openweathermap.org/data/2.5/',
        fetchWeather(city) {
            //example URL: http://api.weatherstack.com/current?access_key=412cf69596a07f8fb091a8ff21b1f5ed&query=tokyo
            return fetch(`${this.baseUrl}weather?q=${city}&units=metric&APPID=${this.apiKey}`)
                .then(res => res.json())
                .then(result => {

                    return [
                        result.name,
                        `${result.main.temp.toFixed(1)}°C`,
                        result.weather[0].description,
                        (result.dt < result.sys.sunset) ? 'day' : 'night',
                    ];
                });
        }
    },
    {
        name: 'weatherapi',
        apiKey: '65fe2082e6ec43e4af4101843210701',
        baseUrl: 'http://api.weatherapi.com/v1/',
        fetchWeather(city) {
            //example URL: http://api.weatherapi.com/v1/forecast.json?key=65fe2082e6ec43e4af4101843210701&q=Tokyo&days=1
            return fetch(`${this.baseUrl}forecast.json?key=${this.apiKey}&q=${city}&days=1`)
                .then(res => res.json())
                .then(result => {

                    return [
                        result.location.name,
                        `${result.current.temp_c.toFixed(1)}°C`,
                        result.current.condition.text,
                        (new Date(result.location.localtime).getTime() <
                            new Date(result.forecast.forecastday[0].date + ' ' + result.forecast.forecastday[0].astro.sunset).getTime()
                        ) ? 'day' : 'night',
                    ]
                });
        }
    },
];

export default providers;
