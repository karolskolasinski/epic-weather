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
            //example URL: https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&APPID=3cf166d1c772fa916a78a5a31dfd1b03
            return fetch(`${this.baseUrl}weather?q=${city}&units=metric&APPID=${this.apiKey}`)
                .then(res => res.json())
                .then(result => {
                    const localtime = result.dt;
                    const sunset = result.sys.sunset;
                    const sunrise = result.sys.sunrise;

                    return [
                        result.name,
                        `${result.main.temp.toFixed(1)}°C`,
                        result.weather[0].description,
                        (localtime < sunset) ? (localtime < sunrise) ? 'night' : 'day' : 'night',
                    ];
                });
        }
    },
    {
        name: 'weatherapi',
        apiKey: '65fe2082e6ec43e4af4101843210701',
        baseUrl: 'https://api.weatherapi.com/v1/',
        fetchWeather(city) {
            //example URL: https://api.weatherapi.com/v1/forecast.json?key=65fe2082e6ec43e4af4101843210701&q=tokyo&days=1
            return fetch(`${this.baseUrl}forecast.json?key=${this.apiKey}&q=${city}&days=1`)
                .then(res => res.json())
                .then(result => {
                    const localtime = new Date(result.location.localtime).getTime();
                    const sunset = new Date(result.forecast.forecastday[0].date + ' ' + result.forecast.forecastday[0].astro.sunset).getTime();
                    const sunrise = new Date(result.forecast.forecastday[0].date + ' ' + result.forecast.forecastday[0].astro.sunrise).getTime();

                    return [
                        result.location.name,
                        `${result.current.temp_c.toFixed(1)}°C`,
                        result.current.condition.text,
                        (localtime < sunset) ? (localtime < sunrise) ? 'night' : 'day' : 'night',
                    ]
                });
        }
    },
];

export default providers;
