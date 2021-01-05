import React from 'react';
import styles from './Option.module.scss';

const Option = ({ cities }) => {

    return (
        <select className={styles}>
            {cities.map(item => (
                <option key={item.city}>{item.city}</option>
            ))}
        </select>
    );
}

export default Option;
