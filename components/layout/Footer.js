import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link';


library.add(faCopyright,faLinkedinIn,faGithub)

const Footer = () =>(

    <div className="footer">
        <div className="footer-container">

            <div className="footer-email">
                <p>I'm currently looking for new opportunities don't hesitate to contact me. I will try to response you back I soon as I can.</p>
                <p className="email-footer">robertmoscaliuc96@gmail.com</p>    
            </div>

            <div className="footer-icons">
                            <p>You also can find me here</p>
                            <div className="footer-link">
                                <a className="footer-link1" href="https://github.com/robertmoscaliuc96"><FontAwesomeIcon icon={faGithub} /></a>
                                
                                <a className="footer-link1" href="https://www.linkedin.com/in/robertmoscalir243004/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
            </div>

        </div>
        <div className="copyright">
                <p className="copyright"><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Design and Create by Robert Moscaliuc</p>
            </div>
    </div>
    
)

export default Footer;