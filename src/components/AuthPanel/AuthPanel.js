import React from 'react';
import style from './AuthPanel.module.scss';
import googleLogo from '../../assets/images/google-logo.png';

const AuthPanel = () => {
    return (
        <>
            <div className={style.loginWrapper}>
                <img className={style.logo} src={googleLogo} alt='google log in' />
                <div className={style.login}>Login with Google</div>
            </div>
        </>
    );
};

export default AuthPanel;
