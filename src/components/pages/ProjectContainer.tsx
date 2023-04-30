import React, { useState } from 'react';
import Projects from './Projects';
import ProjectOne from './projects/ProjectOne';
import ProjectOneText from './projects/ProjectOneText'
import ProjectTwo from './projects/ProjectTwo';
import ProjectTwoText from './projects/ProjectTwoText'
import ProjectThree from './projects/ProjectThree';
import ProjectThreeText from './projects/ProjectThreeText'
import ProjectFour from './projects/ProjectFour';
import ProjectFourText from './projects/ProjectFourText'
import ProjectFive from './projects/ProjectFive';
import ProjectFiveText from './projects/ProjectFiveText'
import ProjectSix from './projects/ProjectSix';
import ProjectSixText from './projects/ProjectSixText'

const projectArr = ['ProjectOne', 'ProjectTwo', 'ProjectThree', 'ProjectFour', 'ProjectFive', 'ProjectSix'];

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
    const renderProjectText = () => {
        if (currentProject === projectArr[0]) {
            return <ProjectOneText />;
        };
        if (currentProject === projectArr[1]) {
            return <ProjectTwoText />;
        };
        if (currentProject === projectArr[2]) {
            return <ProjectThreeText />;
        };
        if (currentProject === projectArr[3]) {
            return <ProjectFourText />;
        };
        if (currentProject === projectArr[4]) {
            return <ProjectFiveText />;
        };
        if (currentProject === projectArr[5]) {
            return <ProjectSixText />;
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
            <Projects currentProject={currentProject} handleProjectChange={handleProjectChange} />
            <div className="section container">
            <div className="sectionBody row justify-content-center">
                <a
                href="#Project/prev" 
                onClick={() => handleProjectChange('Prev')}
                className='col-2 glyphicon align-self-center text-center'>
                        &#10094;
                </a>
                <div className="col-6 img-fluid portfolio-image">{renderProject()}</div>
                <a
                href="#Project/next" 
                onClick={() => handleProjectChange('Next')}
                className='col-2 glyphicon align-self-center text-center'>
                        &#10095;
                </a>

                {renderProjectText()}
            </div>
        </div>
        </div>
    )
}