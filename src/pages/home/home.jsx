import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Исправленный импорт
import './home.css';
import d from './d.png';
import VisitorForm from '../../components/VisitorForm/VisitorForm';

const Home = () => {

    const [isOpen, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Home">
            {isOpen && <VisitorForm onClose={handleClose} />}
            <div className='Art'>
                <h1>Галерея</h1>
                <Link to="/gall">
                    <img src={d} alt='Вниз' />
                </Link>
            </div>
        </div>
    );
};
export default Home;