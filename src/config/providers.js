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
        name: 'weatherstack',
        apiKey: '412cf69596a07f8fb091a8ff21b1f5ed',
        baseUrl: 'http://api.weatherstack.com/',
        fetchWeather(city) {
            //example URL: https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&APPID=3cf166d1c772fa916a78a5a31dfd1b03
            return fetch(`${this.baseUrl}current?access_key=${this.apiKey}&query=${city}`)
                .then(res => res.json())
                .then(result => {
                    return [
                        result.request.query,
                        `${result.current.temperature.toFixed(1)}°C`,
                        result.current.weather_descriptions[0]
                    ]
                });
        }
    },
];

export default providers;
