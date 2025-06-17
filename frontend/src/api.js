const API_BASE = process.env.REACT_APP_API_BASEURL || 'http://localhost:4001/api';

export const fetchCars = () => fetch(`${API_BASE}/cars`).then(res => res.json());
export const fetchEvents = () => fetch(`${API_BASE}/events`).then(res => res.json());
export const fetchSponsors = () => fetch(`${API_BASE}/sponsors`).then(res => res.json());
export const fetchServices = () => fetch(`${API_BASE}/services`).then(res => res.json());

export async function fetchHealth() {
  const response = await fetch(`${API_BASE}/health`);
  if (!response.ok) {
    throw new Error('Failed to fetch health');
  }
  return response.json();
}

console.log(process.env.REACT_APP_API_BASEURL);
