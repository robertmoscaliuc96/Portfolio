import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Head from 'next/head'


const About = () =>(  
      <div>
      
        <Head>
        <title>Robert</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Navbar/>
            <div className="home-image">
                <div className="dark-overlay">
                    
                </div>
            </div>
        <Footer/>
    </div>
    );



export default About;