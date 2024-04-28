import React from 'react';
import { Link } from 'react-router-dom'; // Исправленный импорт
import './home.css';
import d from './d.png';

const Home = () => {

    return (
        <div className="Home">
            <div className='Art'>
                <h1>Галерея</h1>
                <Link to="/gallary">
                    <img src={d} alt='Вниз' />
                </Link>
            </div>
        </div>
    );
};
export default Home;