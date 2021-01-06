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
    };

    selectCity = async (selectedCity) => {
        await this.state.provider.fetchWeather(selectedCity);
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

                        <div>{this.state.provider.name}</div>
                        <div>location</div>
                        <div>{dateBuilder(new Date())}</div>
                        <div>°C</div>
                        <div>description</div>
                    </main>
                </div>
            </>
        );
    };
}

export default Root;
