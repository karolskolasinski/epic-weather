import React from 'react';
import style from './Root.module.css';


const initialStateItems = [
    {
        city: 'Rome'
    },
    {
        city: 'Tokio'
    },
    {
        city: 'New York'
    },
];

class Root extends React.Component {
    state = {
        items: [...initialStateItems],
    };

    render() {
        return (
            <>
                <div className={style.wrapper}>
                    <main className={[style.day]}>HELLO</main>
                </div>
            </>
        );
    }
}

export default Root;
