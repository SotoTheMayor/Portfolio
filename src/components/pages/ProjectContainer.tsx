import React, { useState } from 'react';
import Portfolio from './Portfolio'
import ProjectOne from './projects/ProjectOne';
import ProjectTwo from './projects/ProjectTwo';
import ProjectThree from './projects/ProjectThree';
import ProjectFour from './projects/ProjectFour';
import ProjectFive from './projects/ProjectFive';
import ProjectSix from './projects/ProjectSix';

const projectArr = ['ProjectOne', 'ProjectTwo', 'ProjectThree', 'ProjectFour', 'ProjectFive', 'ProjectSix']


export default function ProjectContainer() {
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
        let index = projectArr.indexOf(currentProject);
        let length = projectArr.length;
        if (cycle === 'Next') {
            index++;
            if (index > length) {
                index = 0;
                setCurrentProject(projectArr[0]);    
            } else {
            setCurrentProject(projectArr[index]);
            }
        }
        if (cycle === 'Prev') {
            index--;
            if (index < 0) {
                index = length;
                setCurrentProject(projectArr[length]);    
            } else {
            setCurrentProject(projectArr[index]);
            }
        }
    }

    return (
        <div>
            <Portfolio currentProject={currentProject} handleProjectChange={handleProjectChange} />
            {renderProject()}
        </div>
    )
}