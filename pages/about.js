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
                <div className="contact-form">
                    <form className="form">
                      <div className="form-group">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                      </div>
                      <input type="text" placeholder="Subject"/>
                      <textarea type="text" placeholder="Message"/>
                      <button className="contact-button">Send</button>
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