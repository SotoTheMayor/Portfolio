import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ProjectOne from './pages/projects/ProjectOne';
import ProjectTwo from './pages/projects/ProjectTwo';
import ProjectThree from './pages/projects/ProjectThree';
import ProjectFour from './pages/projects/ProjectFour';
import ProjectFive from './pages/projects/ProjectFive';
import ProjectSix from './pages/projects/ProjectSix';

const projectArr = ['ProjectOne', 'ProjectTwo', 'ProjectThree', 'ProjectFour', 'ProjectFive', 'ProjectSix'];

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


    const [currentProject, setCurrentProject] = useState(projectArr[0]);
    const renderProject = () => {
        if (currentProject === projectArr[0]) {
            return <ProjectOne />;
        };
        if (currentProject === projectArr[1]) {
            return <ProjectTwo />;
        };
        if (currentProject === projectArr[2]) {
            return <ProjectThree />;
        };
        if (currentProject === projectArr[3]) {
            return <ProjectFour />;
        };
        if (currentProject === projectArr[4]) {
            return <ProjectFive />;
        };
        if (currentProject === projectArr[5]) {
            return <ProjectSix />;
        };
    };

    const handleProjectChange = (cycle: string) => {
        var index = projectArr.indexOf(currentProject);
        console.log(index)
        var length = projectArr.length;
        if (cycle === 'Next') {
            index++;
            if (index >= length) {
                index = 0;
                setCurrentProject(projectArr[0]);    
            } else {
            setCurrentProject(projectArr[index]);
            }
        }
        if (cycle === 'Prev') {
            index--;
            if (index < 0) {
                index = length - 1;
                setCurrentProject(projectArr[index]);    
            } else {
            setCurrentProject(projectArr[index]);
            }
        }
        console.log('after -- ' + index)
    }

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Portfolio currentProject={currentProject} handleProjectChange={handleProjectChange} />
            {renderProject()}
        </div>
    )
}