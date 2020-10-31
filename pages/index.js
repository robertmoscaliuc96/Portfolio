import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Link from "next/link"
import Head from 'next/head'
import HeadInner from '../components/layout/Head'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedinIn)

const Index = () =>(
    <div className="homepage">
        <HeadInner/>
        <Navbar/>
            <div className="home-image">
                <div className="dark-overlay">
                    <div className="home-inner">
                        <p className="large">Hi I'm Robert Moscaliuc</p>
                        <p className="paragraph-2">I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products.</p>
                        <Link href="/projects"><button className="work-button">My Work</button></Link>
                        
                        <div className="font-icons">
                            <a className="font-link" href="https://github.com/robertmoscaliuc96"><FontAwesomeIcon icon={faGithub}/> </a>
                            <a className="font-link" href="https://www.linkedin.com/in/robertmoscalir243004/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </div>
                    </div>    
                </div>
                
            </div>
            
        <Footer/>
    </div>
)

export default Index;