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
                    <div className="home-inner">
                        <div className="home-text">
                            <p className="large">Hi,</p>
                            <p className="large-name">I'm Robert,</p>
                            <p className="large-name">web developer,</p>
                            <p className="paragraph">I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products.</p>
                            <div className="button-div">
                                <Link href="/projects"><button className="work-button">My Work</button></Link>
                            </div>
                            
                        </div>
                        <div className="large-logo">
                            <img src="/r30degree.svg" alt=".robert"  className="big-logo"/>
                        </div>
                    </div>

                
            </div>
            

    </div>
)

export default Index;