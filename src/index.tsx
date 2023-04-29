import { createRoot } from 'react-dom/client';
import Portfolio from './Portfolio';
import { StrictMode } from 'react';
import 'boostrap/dist/css/boostrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Portfolio />
    </StrictMode>
)
