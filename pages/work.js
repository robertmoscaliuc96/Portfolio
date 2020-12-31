import Navbar from '../components/layout/Navbar'
import HeadInner from '../components/layout/Head'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub,faChrome} from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faChrome)

const Work = () =>(  
      <div>
        <HeadInner/>
        <Navbar/>
                <div className="work-container">
                    <h1 className="work-title large-name"> Porjects</h1>
                    <div className="work-inner">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-img4"/>
                                <h1 className="card-title">Cook At Home</h1>
                                <div className="card-description">
                                <p className="card-description">Full-stack application using MERN stack where users share their recipes and find other recipes ideas using Edamame API.</p>
                                <div className="card-tech">
                                    <p className="card-technologies">React</p>
                                    <p className="card-technologies">NodeJS</p>
                                    <p className="card-technologies">MongoDB</p>
                                    <p className="card-technologies">Redux</p>
                                </div>


                                <div className="card-link">
                                    <a href="https://github.com/robertmoscaliuc96/Recipefy"><i className="fab fa-github"></i></a>
                                    <a href="https://cook-at-homerecipefy.herokuapp.com/login"><i className="fab fa-chrome"></i></a>
                                </div>

                                </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="card-img"/>
                                <h1 className="card-title">Developers FAQ</h1>
                                <div className="card-description">
                                <p className="card-description">Full-stack application using MERN stack for a FAQ website where users can authenticate, ask questions and get answer from other developers.</p>
                                <div className="card-tech">
                                    <p className="card-technologies">React</p>
                                    <p className="card-technologies">NodeJS</p>
                                    <p className="card-technologies">MongoDB</p>
                                    <p className="card-technologies">Redux</p>
                                </div>


                                <div className="card-link">
                                    <a href="https://github.com/robertmoscaliuc96/FQA-Website"><i className="fab fa-github"></i></a>
                                    <a href="https://floating-ocean-48991.herokuapp.com"><i className="fab fa-chrome"></i></a>
                                </div>

                                </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="card-img2"/>
                                <h1 className="card-title">GitHub Finder</h1>
                                <div className="card-description">
                                <p className="card-description">Web application that use GitHub API to search for different users and their details. Also, provide a second page for jobs searching from different location.</p>
                                <div className="card-tech">
                                    <p className="card-technologies">React</p>
                                    <p className="card-technologies">Hooks</p>
                                    <p className="card-technologies">Bootstrap</p>
                                    
                                </div>

                                <div className="card-link">
                                    <a href="https://github.com/robertmoscaliuc96/GitHub-Finder.git"><i className="fab fa-github"></i></a>
                                    <a href="https://happy-noyce-52ce35.netlify.app/"><i className="fab fa-chrome"></i></a>
                                </div>

                                </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="card-img3"/>
                                <h1 className="card-title">Freelancing</h1>
                                <div className="card-description">
                                <p className="card-description">Showcase website with the role to is to present services, information about a company and a contact form that sends messages to the company staff.</p>
                                <div className="card-tech">
                                    <p className="card-technologies">React</p>
                                    <p className="card-technologies">Next.js</p>
                                    <p className="card-technologies">NodeJS</p>
                                    
                                </div>


                                <div className="card-link">
                                    <a  href="https://calm-ridge-27757.herokuapp.com/"><i className="fab fa-chrome"></i></a>
                                </div>

                                </div>

                        </div>
                    </div>
                   

                </div>
                </div>
    </div>
    );

export default Work;