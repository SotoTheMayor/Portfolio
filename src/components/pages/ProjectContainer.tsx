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

//array that holds all project names that correspond to their separate files - must be edited to include more/less
const projectArr = ['ProjectOne', 'ProjectTwo', 'ProjectThree', 'ProjectFour', 'ProjectFive', 'ProjectSix'];

export default function ProjectContainer() {
    const [currentProject, setCurrentProject] = useState(projectArr[0]);
    //render for each project - corresponds to projectArr
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
    //separate text element (description of project) for each project
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
        //identifies current displayed project and used to cycle to Next or Prev - values are passed from onClick below
        var index = projectArr.indexOf(currentProject);
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
    }

    return (
        <div className="wholePage container">
            <div className='row'>
                <div className="imageBanner projectImg col-4"></div>
                <div className='col-8'>
                    <Projects currentProject={currentProject} handleProjectChange={handleProjectChange} />
                    <div className="section">
                        <div className="sectionBody row justify-content-center">
                            <a
                                href="#Project/prev" 
                                {/* passes 'Prev' to handler above */}
                                onClick={() => handleProjectChange('Prev')}
                                className='col-2 glyphicon align-self-center text-center'>
                                &#10094;
                            </a>
                            {/* renders project image with link to project */}
                            <div className="col-6 img-fluid portfolio-image">{renderProject()}</div>
                            <a
                                href="#Project/next" 
                                {/* passes 'Next' to handler above */}
                                onClick={() => handleProjectChange('Next')}
                                className='col-2 glyphicon align-self-center text-center'>
                                &#10095;
                            </a>
                            {/* project text display that corresponds to image  */}
                            {renderProjectText()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}