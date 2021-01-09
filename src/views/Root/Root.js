import React from 'react';
import style from './Root.module.scss';
import cities from '../../config/cities';
import providers from '../../config/providers';
import dateBuilder from '../../config/dateBuilder';
import firebase from 'firebase'
import firebaseConfig from '../../config/firebaseConfig';
import Select from '../../components/Select/Select';
import AuthPanel from '../../components/AuthPanel/AuthPanel';

firebase.initializeApp(firebaseConfig);


class Root extends React.Component {
    state = {
        cities: [...cities],
        currentCity: '',
        provider: providers[0],
        location: '',
        temperature: '',
        description: 'Please select city to fetch latest forecast :)',
        timeOfDay: 'day',
        isLoggedIn: false,
        buttonText: 'Login with Google',
    };


    selectCity = async (selectedCity) => {
        const forecast = await this.state.provider.fetchWeather(selectedCity);
        await this.setForecastData(forecast);
        await this.setState({ currentCity: selectedCity });
    };


    selectProvider = async (selectedProvider) => {
        await this.setState({
                provider: providers.find(el => {
                    return el.name === selectedProvider;
                }),
            },
        );

        if (this.state.currentCity !== '') {
            const forecast = await this.state.provider.fetchWeather(this.state.currentCity);
            await this.setForecastData(forecast);
        }
    };


    async setForecastData(forecast) {
        await this.setState({
            location: forecast[0],
            temperature: forecast[1],
            description: forecast[2],
            timeOfDay: forecast[3],
        });
    }


    loginFn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(() => {
                this.setState({
                    isLoggedIn: true,
                    buttonText: 'Sign out',
                });
            }).catch((error) => {
            console.error(error);
        });
    };


    logoutFn = () => {
        firebase.auth()
            .signOut()
            .then(() => {
                this.setState({
                    isLoggedIn: false,
                    buttonText: 'Login with Google',
                });
            }).catch((error) => {
            console.log(error);
        });
    };


    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isLoggedIn: true,
                    buttonText: 'Sign out',
                });
            }
        });
    };


    render() {
        let selectProvider;
        selectProvider = this.state.isLoggedIn ?
            <Select items={providers} select={this.selectProvider} /> :
            null;

        return (
            <>
                <div className={this.state.timeOfDay === 'day' ? style.wrapperDay : style.wrapperNight}>
                    <main className={this.state.timeOfDay === 'day' ? style.day : style.night}>
                        <Select items={cities} cities select={this.selectCity} />
                        {selectProvider}

                        <div className={style.location}>{this.state.location}</div>
                        <div className={style.date}>{dateBuilder(new Date())}</div>
                        <div className={this.state.currentCity !== '' ? style.temperature : ''}>
                            {this.state.temperature}
                        </div>
                        <div className={style.description}>{this.state.description}</div>

                        <AuthPanel buttonFn={this.state.isLoggedIn ? this.logoutFn : this.loginFn}
                                   buttonText={this.state.buttonText}
                        />
                    </main>
                </div>
            </>
        );
    };
}


export default Root;
