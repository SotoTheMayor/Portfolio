import React from "react";

//html return that loads with PortfolioContainer - static
export default function NavTabs({ currentPage, handlePageChange }: any) {
    return (
        <header>
            <h1>Jason Johnson</h1>
        <img id="avatar" src={require('../Assets/git-av.jpg')} alt="Colorful Cat Avatar" />
        <nav>
        <ul className="nav">
            <li className="navlinks">
                <a href="#AboutMe"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                    AboutMe
                </a>
            </li>
            <li className="navlinks">
                <a href="#Projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
            </li>
            <li className="navlinks">
                <a href="#Resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
            <li className="navlinks">
                <a href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
        </nav>
        </header>
    )
}