import React, { useState, useEffect } from 'react';
import { fetchEvents } from './api';

const EventsPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then(setItems)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {items.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {`${item.name} on ${item.date} at ${item.location} - ${item.description}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventsPage;