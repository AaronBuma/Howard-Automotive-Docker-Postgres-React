import React, { useEffect, useState } from 'react';
import { fetchSponsors } from './api';

function SponsorsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchSponsors().then(setItems).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Sponsors</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.website}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SponsorsPage;
