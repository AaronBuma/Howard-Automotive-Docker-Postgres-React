import './App.css';
import { useEffect, useState } from 'react';
import { fetchHealth } from './api';

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetchHealth()
      .then(data => setStatus(data.message))
      .catch(() => setStatus('Error contacting API'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Howard Automotive</h1>
        <p>API Status: {status}</p>
      </header>
    </div>
  );
}

export default App;
