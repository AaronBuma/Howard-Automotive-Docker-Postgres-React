import React, { useState, useEffect } from 'react';
import { fetchSponsors } from './api';

const SponsorsPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSponsors()
      .then(setItems)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h2>Sponsors</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {items.length === 0 ? (
        <p>No sponsors found.</p>
      ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.logo_url && (
                    <img
                      src={item.logo_url}
                      alt={`${item.name} logo`}
                      style={{ width: '100px', height: 'auto', marginRight: '1rem' }}
                    />
                  )}
                  <div>
                    <a href={item.website_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none' }}>
                      {item.name}
                    </a>
                    <p style={{ margin: '0.5rem 0' }}>{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

      )}
    </div>
  );
};

export default SponsorsPage;