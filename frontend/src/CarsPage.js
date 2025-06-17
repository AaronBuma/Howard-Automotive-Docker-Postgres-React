import React, { useEffect, useState } from 'react';
import { fetchCars } from './api';

function CarsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCars().then(setItems).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Our Cars</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.year} {item.make} {item.model} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarsPage;
