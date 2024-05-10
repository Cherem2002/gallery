import React, { useState, useEffect } from 'react';
import './VisitorForm.css';


function VisitorForm({ onClose }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Получаем текущее значение счетчика посещений из базы данных Firebase
    fetch('https://cherem-gallery-default-rtdb.asia-southeast1.firebasedatabase.app/visits.json')
      .then(response => response.json())
      .then(data => {
        if (data) {
          setVisits(data);
        }
      })
      .catch(error => console.error('Ошибка получения данных о посещениях:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = {
      name: name,
      age: age,
      visits: visits + 1 // Увеличиваем счетчик посещений на 1 при каждом посещении
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
    setVisits(visits + 1);
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

