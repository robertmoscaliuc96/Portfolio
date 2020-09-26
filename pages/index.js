import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Link from "next/link"
import Head from 'next/head'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Index = () =>(
    <div className="homepage">
        <Head>
        <title>Robert</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <Navbar/>
            <div className="home-image">
                <div className="dark-overlay">
                    <div className="home-inner">
                        <h1 className="large">Hi I'm Robert Moscaliuc</h1>
                        <p className="paragraph-2">Full stack Web Developer with a background in Computer Science.</p>
                        <Link href="/projects"><button className="work-button">My Work</button></Link>
                        
                        <div className="font-icons">
                            <a className="font-link" href="https://github.com/robertmoscaliuc96"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className="font-link" href="https://www.linkedin.com/in/robertmoscalir243004/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>    
                </div>
                
            </div>
            
        <Footer/>
    </div>
)

export default Index;