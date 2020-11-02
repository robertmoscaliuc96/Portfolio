import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Head from 'next/head'
import Link from 'next/link';
import Headinner from '../components/layout/Head'
import { Fragment } from 'react';

const Test = () =>(  
      <Fragment>

        <Head>
        <title>Robert</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"></link>
        </Head>

        <Navbar/>
        <div className="home-image">
                    <div className="test-inner">
                        <div className="home-text">
                            <p className="large">Hi,</p>
                            <p className="large-name">I'm Robert,</p>
                            <p className="large-name">web developer,</p>
                            <p className="paragraph">I'm an enthusiastic software developer, that covers the full-stack development of a website and aims to build responsive and engaging products.</p>
                            <div className="button-div">
                                <Link href="/work"><button className="work-button">My Work</button></Link>
                            </div>
                            
                        </div>
                        <div className="large-logo">
                            <img src="/r30degree.svg" alt=".robert"  className="big-logo"/>
                        </div>
                    </div>

                
            </div>
    </Fragment>
    );

export default Test;