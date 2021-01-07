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
    };

    selectCity = async (selectedCity) => {
        const forecast = await this.state.provider.fetchWeather(selectedCity);

        await this.setState({
            location: forecast[0],
            temperature: forecast[1],
            description: forecast[2],
        })

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
            await this.state.provider.fetchWeather(this.state.currentCity);
        }
    }

    render() {
        return (
            <>
                <div className={style.wrapper}>
                    <main className={[style.day]}>
                        <Select items={cities} cities select={this.selectCity} />
                        <Select items={providers} select={this.selectProvider} />

                        <div>{this.state.location}</div>
                        <div>{dateBuilder(new Date())}</div>
                        <div>{this.state.temperature}</div>
                        <div>{this.state.description}</div>
                    </main>
                </div>
            </>
        );
    };
}

export default Root;
