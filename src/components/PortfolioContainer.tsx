import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        };
        if (currentPage === 'Contact') {
            return <Contact />;
        };
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        };
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page: any) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}