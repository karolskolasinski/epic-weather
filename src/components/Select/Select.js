import React from 'react';
import styles from './Select.module.scss';


const Select = ({ items, cities, select }) => {
    return cities ? (
        <select className={styles.select} defaultValue={'select city'} onChange={e => {
            select(e.target.value);
        }}>
            <option className={styles.option} key='empty' value={'select city'} disabled>select city</option>
            {items.map(item => (
                <option className={styles.option} key={item.city} value={item.city}>{item.city}</option>
            ))}
        </select>
    ) : (
        <select className={styles.select} onChange={e => {
            select(e.target.value);
        }}>
            {items.map(item => (
                <option className={styles.option} key={item.name} value={item.name}>{item.name}</option>
            ))}
        </select>
    );
}

export default Select;
