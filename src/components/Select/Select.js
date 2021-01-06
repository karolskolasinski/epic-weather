import React from 'react';
import styles from './Select.module.scss';


const Select = ({ items, providers }) => {
    return providers ? (
        <select className={styles}>
            {items.map(item => (
                <option selected={items.option === 'openweathermap'} key={item.option}>{item.option}</option>
            ))}
        </select>
    ) : (
        <select className={styles}>
            <option key='empty' />
            {items.map(item => (
                <option key={item.option}>{item.option}</option>
            ))}
        </select>
    );
}

export default Select;
