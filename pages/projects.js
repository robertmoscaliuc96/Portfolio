import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Head from 'next/head'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faChrome} from '@fortawesome/free-brands-svg-icons'

const Projects = () =>(  
      <div>
        <Head>
        <title>Robert</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar/>
            <div className="home-image">
                <div className="dark-overlay">
                <div className="project-inner">
                    <div className="project-box">
                        <div className="project-img1"></div>
                        <h1 className="project-title">Developers FAQ</h1>
                        <p className="project-description">Full-stack application using MERN stack for a FAQ website where users can authenticate, ask questions and get answer from other developers.</p>
                        <p className="project-technologies"> React NodeJS Express MongoDB</p>

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
                            <a className="project-link" href="https://github.com/robertmoscaliuc96/GitHub-Finder.git"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className="project-link" href="https://happy-noyce-52ce35.netlify.app/"><FontAwesomeIcon icon={faChrome} /></a>
                        </div>
                        
                    </div>
                    <div className="project-box">
                        <div className="project-img3"></div>
                        <h1 className="project-title">Freelancing </h1>
                        <p className="project-description">Showcase website that its role is to present services, information about a company and a contact form that send messages to the company staff.</p>
                        <p className="project-technologies"> Freelancing</p>

                        <div className="project-link2">
                            <a  href="https://calm-ridge-27757.herokuapp.com/"><FontAwesomeIcon icon={faChrome} /></a>
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