import React, { useEffect, useState } from 'react';
import { fetchEvents } from './api';

function EventsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchEvents().then(setItems).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.date} @ {item.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
