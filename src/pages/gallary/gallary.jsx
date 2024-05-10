import React from 'react';
import { Link } from 'react-router-dom'; // Исправленный импорт
import './gallary.css';


const Gallary = () => {

    return (
        <div className="Gallary">
            <h1>Жанры</h1>
            <div className='Genres'>
                <div className='Modern'>
                    <Link to="/gall/modern">
                        <button>Модернизм</button>
                    </Link>
                </div>
                <div className='Impr'>
                    <Link to="/gall/impr">
                        <button>Импрессионизм</button>
                    </Link>
                </div>
                <div className='Cl'>
                    <Link to="/gall/cl">
                        <button>Классицизм</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Gallary;