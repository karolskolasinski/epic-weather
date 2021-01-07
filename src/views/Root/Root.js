import React from 'react';
import style from './Root.module.scss';
import Select from '../../components/Select/Select';
import cities from '../../config/cities';
import providers from '../../config/providers';
import dateBuilder from '../../config/dateBuilder';


class Root extends React.Component {
    state = {
        cities: [...cities],
        currentCity: '',
        provider: providers[0],
        location: '',
        temperature: '',
        description: '',
        timeOfDay: 'day',
    };

    selectCity = async (selectedCity) => {
        const forecast = await this.state.provider.fetchWeather(selectedCity);
        await this.setForecastData(forecast);
        await this.setState({ currentCity: selectedCity });
    }

    selectProvider = async (selectedProvider) => {
        await this.setState({
                provider: providers.find(el => {
                    return el.name === selectedProvider
                }),
            },
        );

        if (this.state.currentCity !== '') {
            const forecast = await this.state.provider.fetchWeather(this.state.currentCity);
            await this.setForecastData(forecast);
        }
    }

    async setForecastData(forecast) {
        await this.setState({
            location: forecast[0],
            temperature: forecast[1],
            description: forecast[2],
            timeOfDay: forecast[3],
        })
    }

    render() {
        return (
            <>
                <div className={this.state.timeOfDay === 'day' ? style.wrapperDay : style.wrapperNight}>
                    <main className={[style.day]}>
                        <Select items={cities} cities select={this.selectCity} />
                        <Select items={providers} select={this.selectProvider} />

                        <div>{this.state.location}</div>
                        <div>{dateBuilder(new Date())}</div>
                        <div>{this.state.temperature}</div>
                        <div>{this.state.description}</div>
                        <div>{this.state.timeOfDay}</div>
                    </main>
                </div>
            </>
        );
    };
}

export default Root;
