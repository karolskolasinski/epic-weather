import React from 'react';
import style from './Root.module.scss';
import Select from '../../components/Select/Select';
import cities from '../../config/cities';
import providers from '../../config/providers';
import dateBuilder from '../../config/dateBuilder';


class Root extends React.Component {
    state = {
        cities: [...cities],
        provider: providers[0],
    };

    selectCity = (city) => {
        this.state.provider.fetchWeather(city);
    }

    selectProvider = (selectedProvider) => {
        this.setState({
            provider: providers.find(el => {
                return el.name === selectedProvider
            }),
        });
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
