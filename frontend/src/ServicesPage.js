import React, { useEffect, useState } from 'react';
import { fetchServices } from './api';

function ServicesPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchServices().then(setItems).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;
