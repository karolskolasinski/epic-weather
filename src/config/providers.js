const providers = [
    {
        provider: 'openweathermap',
        apiKey: '3cf166d1c772fa916a78a5a31dfd1b03',
        baseUrl: 'https://api.openweathermap.org/data/2.5/',
        fetchData: function () {
            return 'fetch data';
        }
    },
    {
        provider: 'second',
        apiKey: '',
        baseUrl: '',
    },
];

export default providers;
