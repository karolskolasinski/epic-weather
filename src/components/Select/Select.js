import React from 'react';
import styles from './Select.module.scss';


const Select = ({ items, providers }) => {
    return providers ? (
        <select className={styles}>
            {items.map(item => (
                <option defaultValue={'openweathermap'} key={item.option}>{item.option}</option>
            ))}
        </select>
    ) : (
        <select className={styles} value='empty'>
            <option value={'empty'} key='empty' disabled>select city</option>
            {items.map(item => (
                <option key={item.option}>{item.option}</option>
            ))}
        </select>
    );
}

export default Select;
