import Navbar from '../components/layout/Navbar'
import HeadInner from '../components/layout/Head'


const About = () =>(  
      <div className="homepage">
        <HeadInner/>
        <Navbar/>
            <div className="about-image">
                <div className="about-inner">
                    <div className="language">
                        <h1 className="large-skill">Skills.</h1>
                        <h3>Programming language</h3>
                        <p> JavaScript, HTML5, CSS3, Java, Python</p>
                        <h3>Libraries / Framework</h3>
                        <p> React, NodeJS, Express, Bootstrap, JWT, Next.js, Redux </p>
                        <h3>Others</h3>
                        <p>MongoDB, SQLite, Git, Heroku, Netlify, Postman, terminal</p>
                    </div>
                    <div className="skills">
                        <div className="skills-info">
                            <p>Back-end integration</p>
                            <p>Debugging</p>
                            <p>Responsive Design</p>
                            <p>Api integration</p>
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
    </div>
    );

export default About;