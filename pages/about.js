import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Head from 'next/head'

const About = () =>(  
      <div>

        <Head>
        <title>Robert</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        </Head>

        <Navbar/>
            <div className="home-image">
                <div className="dark-overlay">
                <div className="about-inner">
                    <div className="language">
                        <h1>Skills</h1>
                        <h3>Programming language</h3>
                        <p> JavaScript, HTML5, CSS3, Java</p>
                        <h3>Libraries / Framework</h3>
                        <p> React, NodeJS, Express, Bootstrap, JWT, Next.js, </p>
                        <h3>Tools & Platforms</h3>
                        <p> Git, Heroku, Netlify, terminal</p>
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
            </div>
            <div className="space-about">

                </div>
        <Footer/>
    </div>
    );

export default About;