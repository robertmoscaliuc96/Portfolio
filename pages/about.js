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
                    <p className="paragraph-about">You can reach out to me if you need something building for the web or have any questions. Also, I am interested in any entry-level opportunities. So don't hesitate to contact me on on LinkedIn or email.</p>
                    <div className="about-group">
                      <div className="about-icon">
                        <i className="far fa-paper-plane"></i>
                      </div>
                      <div>
                        <a href="mailto:robertmoscaliuc96@gmail.com" className="contact-button">Send Email</a>
                      </div>
                      
                    </div>
                    
                <div className="contact-form">
                    <form className="form" action="">
                        <div className="about-group">
                          <div className="about-icon">
                            <i className="far fa-file-alt"></i>
                          </div>
                          <div>
                            <a className="contact-button" href="/cv.pdf" download>Download CV</a>

                          </div>

                        </div>

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