import React from 'react';
import './home.css';
import d from './d.png';

const Home = () => {

    return (
        <div className="Home">
            <div className='Art'>
                <h1>Галерея</h1>
                <img src={d} alt='Вниз' />
            </div>
        </div>
    );
};
export default Home;