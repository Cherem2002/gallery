import React, { useState, useEffect } from 'react';
import './VisitorForm.css';


function VisitorForm({ onClose }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dateTime, setDateTime] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const currentDateTime = `${currentDate} ${currentTime}`;

    setDateTime(currentDateTime);


    const postData = {
      name: name,
      age: age,
      dateTime: currentDateTime
    };

    fetch('https://cherem-gallery-default-rtdb.asia-southeast1.firebasedatabase.app/visitors.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Данные успешно отправлены в базу данных Firebase!');
      })
      .catch(error => {
        console.error('Ошибка отправки данных:', error);
      });

    // Очищаем поля формы
    setName('');
    setAge('');
    // Увеличиваем счетчик посещений
    onClose();
  };

  return (
    <div className="PopupOverlay">
      <div className="PopupContent">
        <h2>Форма посетителя</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label>
            Возраст
            <input
              type="number"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              required
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default VisitorForm;

