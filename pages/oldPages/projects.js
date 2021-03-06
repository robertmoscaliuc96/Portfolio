import Navbar from '../../components/layout/Navbar'

import HeadInner from '../../components/layout/Head'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faChrome} from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faChrome)

const Projects = () =>(  
      <div>
        <HeadInner/>
        <Navbar/>
            <div className="home-image">
                <div className="project-inner">
                    <div className="project-box">
                        <div className="project-img1"></div>
                        <h1 className="project-title">Developers FAQ</h1>
                        <p className="project-description">Full-stack application using MERN stack for a FAQ website where users can authenticate, ask questions and get answer from other developers.</p>
                        <p className="project-technologies"> React NodeJS Express MongoDB Redux</p>

                        <div className="project-link">
                            <a href="https://github.com/robertmoscaliuc96/FQA-Website"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://floating-ocean-48991.herokuapp.com/posts"><FontAwesomeIcon icon={faChrome} /></a>
                        </div>
                    </div>
                    <div className="project-box">
                        <div className="project-img2"></div>
                        <h1 className="project-title">GitHub Finder</h1>
                        <p className="project-description">Web application that use GitHub API to search for different users and their details. Also provide a second page for jobs searching.</p>

                        <p className="project-technologies"> React Hooks React Bootstrap</p>

                        <div className="project-link">
                            <a  href="https://github.com/robertmoscaliuc96/GitHub-Finder.git"><FontAwesomeIcon icon={faGithub} /></a>
                            <a  href="https://happy-noyce-52ce35.netlify.app/"><FontAwesomeIcon icon={faChrome} /></a>
                        </div>
                        
                    </div>
                    <div className="project-box">
                        <div className="project-img3"></div>
                        <h1 className="project-title">Freelancing </h1>
                        <p className="project-description">Showcase website that its role is to present services, information about a company and a contact form that send messages to the company staff.</p>
                        <p className="project-technologies"> React Next Node.js Nodemailer</p>

                        <div className="project-link2">
                            <a  href="https://calm-ridge-27757.herokuapp.com/"><FontAwesomeIcon icon={faChrome} /></a>
                        </div>
                        
                    </div>
                </div>
            </div>

    </div>
    );

export default Projects;