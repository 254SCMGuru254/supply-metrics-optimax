import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import Leaflet CSS before the map component loads
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

// Make sure we have a DOM element to render to
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

// Create and render the app
createRoot(rootElement).render(<App />);