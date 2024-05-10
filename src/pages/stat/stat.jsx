import React, { useState, useEffect } from 'react';
import './stat.css';

const Stat = () => {
    const [visitors, setVisitors] = useState([]);

    useEffect(() => {
        // Запрос к базе данных Firebase для получения данных о посетителях
        fetch('https://cherem-gallery-default-rtdb.asia-southeast1.firebasedatabase.app/visitors.json')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // Преобразуйте полученные данные в массив и установите его в состояние
                    const visitorsArray = Object.values(data);
                    setVisitors(visitorsArray);
                }
            })
            .catch(error => console.error('Ошибка получения данных о посетителях:', error));
    }, []);

    const totalVisitors = visitors.length;

    return (
        <div className="static">
            <h2>Статистика</h2>
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Возраст</th>
                        <th>Дата и время</th>
                    </tr>
                </thead>
                <tbody>
                    {visitors.map((visitor, index) => (
                        <tr key={index}>
                            <td>{visitor.name}</td>
                            <td>{visitor.age}</td>
                            <td>{visitor.dateTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Общее количество посетителей: {totalVisitors}</p>
        </div>
    );
};

export default Stat;

