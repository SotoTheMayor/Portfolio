import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ProjectContainer from './pages/ProjectContainer';
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
        if (currentPage === 'Projects') {
            return <ProjectContainer />;
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
            <footer className='footer container'>
                <ul className='row'>
                    <li className='col-4'><a href="https://www.linkedin.com/in/jason-johnson-jd-02a220aa/" className='footlinks' target="_blank">LinkedIn Profile</a></li>
                    <li className='col-4'><a href="https://github.com/SotoTheMayor" className='footlinks' target="_blank">GitHub Profile</a></li>
                    <li className='col-4'><a href="mailto:quickfire25@yahoo.com" className='footlinks' target="_blank">Email Me</a></li>
                </ul>
            </footer>
        </div>
    )
}