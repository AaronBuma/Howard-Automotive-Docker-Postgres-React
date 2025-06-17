import React, { useState, useEffect } from 'react';
import { fetchCars } from './api';

const CarsPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCars()
      .then(setItems)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h2>Our Cars</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {items.length === 0 ? (
        <p>No our cars found.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div>
                <strong>{`${item.year} ${item.make} ${item.model} – ${item.color}`}</strong>
                <br />
                <img
                  src={item.image_url}
                  alt={`${item.year} ${item.make} ${item.model}`}
                  style={{ maxWidth: '300px', height: 'auto', marginTop: '10px' }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarsPage;