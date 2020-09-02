import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';


const Footer = () =>(

    <div className="footer">
        <div className="footer-container">
            <div className="footer-email">
                <p>Fell free to email me</p>
                <p className="email-footer">robertmoscaliuc96@gmail.com</p>    
            </div>

            <div className="footer-icons">
                            <p>Or you can find me here</p>
                            <div className="footer-link">
                                <Link className="footer-link1" href="https://github.com/robertmoscaliuc96"><FontAwesomeIcon icon={faGithub} /></Link>
                                
                                <Link className="footer-link1" href="https://www.linkedin.com/in/robertmoscalir243004/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            </div>
            </div>

        </div>
        <div className="copyright">
            <p><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Design and Create by Robert Moscaliuc</p>
            </div>
    </div>
    
)

export default Footer;