import React, { useState, useEffect } from 'react';
import { fetchServices } from './api';

const ServicesPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices()
      .then(setItems)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h2>Services</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {items.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.name}</h3>
                <p style={{ margin: '0.25rem 0' }}>{item.description}</p>
                <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>${Number(item.price).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul> 
      )}
    </div>
  );
};

export default ServicesPage;