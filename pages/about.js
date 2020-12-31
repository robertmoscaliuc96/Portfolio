import Navbar from '../components/layout/Navbar'
import HeadInner from '../components/layout/Head'
import Map from '../components/layout/Map';


const About = () =>(  
      <div className="homepage">
        <HeadInner/>
        <Navbar/>
            <div className="about-image">
              <div className="about-inner">
                <div className="about-text">
                    <h1 className="large-about">Contact me</h1>
                    <p className="paragraph-about">I am interested in any entry-level opportunities.</p>
                    <a href="mailto:robertmoscaliuc96@gmail.com" className="contact-button">Send Email</a>
                    
                <div className="contact-form">
                    <form className="form" action="">
                        <a className="contact-button" href="/cv.pdf" download>Download CV</a>
                      </form>
                        </div>
                    </div>
                <div className="map-inner">
                  <Map/>

              </div>
            </div>
            </div>


            </div>

    );

export default About;