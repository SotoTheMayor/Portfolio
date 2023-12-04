import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ProjectContainer from './pages/ProjectContainer';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    //page renders from Navtab
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        };
        if (currentPage === 'Contact') {
            return <Contact />;
        };
        if (currentPage === 'Projects') {
            return <ProjectContainer />;
        };
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };
    const handlePageChange = (page: any) => setCurrentPage(page);

    //static header and footer that loads from App.tsx
    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <footer className='footer'>
                <ul className='row'>
                    <li className='col-4 footlinks'><a href="https://www.linkedin.com/in/jason-johnson-jd-02a220aa/" target="_blank">LinkedIn Profile</a></li>
                    <li className='col-4 footlinks'><a href="https://github.com/SotoTheMayor" target="_blank">GitHub Profile</a></li>
                    <li className='col-4 footlinks'><a href="mailto:quickfire25@yahoo.com" target="_blank">Email Me</a></li>
                </ul>
            </footer>
        </div>
    )
}