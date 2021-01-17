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
                    <h1 className="large-about">Contact me.</h1>
                    <p className="paragraph-about">I am interested in any entry-level opportunities. Also, if you want to help you or to get in touch with me don't hesitate to contact me on on LinkedIn or email.</p>                    
                    <div className="contact-actions">
                              <div className="about-icon" >
                              <a className="about-icon"  href="mailto:robertmoscaliuc96@gmail.com"  >
                                <i className="far fa-paper-plane icon-about"></i>
                                <h1 className="about-icon-title">Send Email</h1>

                              </a>

                              </div>                    
                              <div className="about-icon" >
                              <a className="about-icon"  href="mailto:robertmoscaliuc96@gmail.com" >
                                <i className="far fa-file-alt icon-about"></i>
                                <h1 className="about-icon-title">Download CV</h1>
                              

                              </a>
                              </div>


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

/* 
                            <a className="contact-button" href="/cv.pdf" download>Download CV</a>
 */

 /* 
                            <i className="far fa-file-alt"></i>
                             <i className="far fa-paper-plane"></i>
 */