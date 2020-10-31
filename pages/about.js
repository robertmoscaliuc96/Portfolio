import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import HeadInner from '../components/layout/Head'
import Link from 'next/link';

const About = () =>(  
      <div>
        <HeadInner/>
        <Navbar/>
            <div className="home-image">

                <div className="about-inner">
                    <div className="language">
                        <h1>Skills</h1>
                        <h3>Programming language</h3>
                        <p> JavaScript, HTML5, CSS3, Java, Python</p>
                        <h3>Libraries / Framework</h3>
                        <p> React, NodeJS, Express, Bootstrap, JWT, Next.js, Redux </p>
                        <h3>Others</h3>
                        <p>MongoDB, SQLite, Git, Heroku, Netlify, Postman, terminal</p>
                    </div>
                    <div className="skills">
                        <div className="skills-info">
                            <h3>Back-end integration</h3>
                            <h3>Debugging</h3>
                            <h3>Responsive Design</h3>
                            <h3>Api integration</h3>
                        </div>
                        <div className="skill-icon">
                            <img src="/backend.png" alt="my image" className="img-about"/>
                            <img src="/bug.png" alt="my image" className="img-about"/>
                            <img src="/responsive.png" alt="my image" className="img-about"/>
                            <img src="/api.png" alt="my image" className="img-about"/>
                        </div>

                    </div>


                </div>
            </div>
            <div className="space-about">
                </div>

    </div>
    );

export default About;