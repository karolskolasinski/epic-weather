import React from 'react';
import styles from './Select.module.scss';


const Select = ({ items, cities }) => {
    return cities ? (
        <select className={styles} defaultValue={'select city'} onChange={e => {
            console.log(e.target.value);
        }}>
            <option key='empty' value={'select city'} disabled>select city</option>
            {items.map(item => (
                <option key={item.city} value={item.city}>{item.city}</option>
            ))}
        </select>
    ) : (
        <select className={styles}>
            {items.map(item => (
                <option key={item.provider}>{item.provider}</option>
            ))}
        </select>

    );
}

export default Select;
