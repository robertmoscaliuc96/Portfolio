import Navbar from '../components/layout/Navbar'
import HeadInner from '../components/layout/Head'


const Skills = () =>(  
      <div className="homepage">
        <HeadInner/>
        <Navbar/>
            <div className="skill-image">
                <div className="skill-inner">
                    <div className="language">
                        <h1 className="large-skill">Skills.</h1>
                         <div className="paragraph-skill">
                            <h3>Programming language</h3>
                            <p> JavaScript, HTML5, CSS3, Java, Python</p>
                            <h3>Libraries / Framework</h3>
                            <p> React, NodeJS, Express, MongoDB, SQLite, Bootstrap, JWT, Next.js, Redux, React-Spring </p>
                            <h3>Others</h3>
                            <p> Git, Heroku, Netlify, Postman, Adobe Illustrator, Figma, terminal </p>

                         </div>
                    </div>
                    <div className="skills">
                        <div className="skill-group">
                            <div className="skill-icon">
                                <img src="/backend.png" alt="my image" className="img-about"/>
                            </div>
                            <div className="skills-info">
                                <p>Backend integration</p>

                        </div>
                        </div>
                        <div className="skill-group">
                            <div className="skill-icon">
                                <img src="/bug.png" alt="my image" className="img-about"/>
                            </div>
                            <div className="skills-info">
                                <p>Debugging</p>
                        </div>
                        </div>
                        <div className="skill-group">
                            <div className="skill-icon">
                                <img src="/responsive.png" alt="my image" className="img-about"/>
                            </div>
                            <div className="skills-info">
                                <p>Responsive Design</p>

                        </div>
                        </div>
                        <div className="skill-group">
                            <div className="skill-icon">
                                <img src="/api.png" alt="my image" className="img-about"/>
                            </div>
                            <div className="skills-info">
                                <p>Api integration</p>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
    );

export default Skills;