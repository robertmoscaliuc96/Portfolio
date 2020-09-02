import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'



const Index = () =>(
    <div className="homepage">
        <Navbar/>
            <div className="home-image">
                <div className="dark-overlay">
                    <div className="home-inner">
                        <h1 className="large">Hi I'm Robert Moscaliuc</h1>
                        <p className="paragraph-2">Full stack Web Developer with a background in Computer Science.</p>
                        <Link href="/projects"><button className="work-button">My Work</button></Link>
                        
                        <div className="font-icons">
                            <Link className="font-link" href="https://github.com/robertmoscaliuc96"><FontAwesomeIcon icon={faGithub} /></Link>
                            <Link className="font-link" href="https://www.linkedin.com/in/robertmoscalir243004/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                        </div>
                    </div>    
                </div>
                
            </div>
            
        <Footer/>
    </div>
)

export default Index;