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
        console.log(city);
    }

    selectProvider = (provider) => {
        this.setState({
            provider: providers.filter(obj => obj.provider === provider)[0],
        });
        console.log(this.state.provider);
    }

    render() {

        return (
            <>
                <div className={style.wrapper}>
                    <main className={[style.day]}>
                        <Select items={cities} cities select={this.selectCity} />
                        <Select items={providers} select={this.selectProvider} />

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
