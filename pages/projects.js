import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faChrome, faReact} from '@fortawesome/free-brands-svg-icons'

const Projects = () =>(  
      <div>
        <Navbar/>
            <div className="home-image">
                <div className="dark-overlay">
                <div className="project-inner">
                    <div className="project-box">
                        <div className="project-img1"></div>
                        <h1 className="project-title">Developers FAQ</h1>
                        <p className="project-description">Full-stack application using MERN stack for a FAQ website where users can authenticate, ask questions and get answer from other developers</p>
                        <p className="project-technologies"> Technologies:</p>
                        <ul className="project-list">
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                        </ul>
                        <div className="project-link">
                            <a href="https://github.com/robertmoscaliuc96"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/robertmoscalir243004/"><FontAwesomeIcon icon={faChrome} /></a>
                        </div>
                    </div>
                    <div className="project-box">
                        <div className="project-img2"></div>
                        <h1 className="project-title">GitHub Finder</h1>
                        <p className="project-description">Web application that use GitHub API to search for users and jobs</p>
                        <p className="project-technologies"> Technologies</p>
                        <ul className="project-list">
                            <li>React</li>
                            <li>React Hooks</li>
                            <li>React Bootstrap</li>
  
                        </ul>
                        <div className="project-link1">
                            <a className="project-link" href="https://github.com/robertmoscaliuc96"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className="project-link" href="https://www.linkedin.com/in/robertmoscalir243004/"><FontAwesomeIcon icon={faChrome} /></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="space">

            </div>
        <Footer/>
    </div>
    );



export default Projects;