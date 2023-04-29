import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import 'boostrap/dist/css/boostrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
