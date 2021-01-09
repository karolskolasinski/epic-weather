import React from 'react';
import style from './AuthPanel.module.scss';
import googleLogo from '../../assets/images/google-logo.png';


const AuthPanel = ({ buttonFn, buttonText }) => {
    return (
        <>
            <button className={style.button} onClick={buttonFn}>
                <img className={style.logo} src={googleLogo} alt={buttonText} />
                {buttonText}
            </button>
        </>
    );
};


export default AuthPanel;
