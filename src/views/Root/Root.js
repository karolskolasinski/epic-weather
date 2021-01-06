import React from 'react';
import style from './Root.module.scss';
import Select from '../../components/Select/Select';
import cities from '../../config/cities';
import providers from '../../config/providers';
import dateBuilder from '../../config/dateBuilder';

class Root extends React.Component {
    state = {
        cities: [...cities],
        providers: [...providers],
    };

    render() {
        return (
            <>
                <div className={style.wrapper}>
                    <main className={[style.day]}>
                        <Select items={cities} />
                        <Select items={providers} providers/>

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
