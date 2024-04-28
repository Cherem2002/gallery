import React from 'react';
import './gallary.css';


const Gallary = () => {

    return (
        <div className="Gallary">
            <h1>Жанры</h1>
            <div className='Genres'>
                <div className='Modern'>
                    <button>Модернизм</button>
                </div>
                <div className='Impr'>
                    <button>Импрессионизм</button>
                </div>
                <div className='Cl'>
                    <button>Классицизм</button>
                </div>
            </div>
        </div>
    );
};
export default Gallary;