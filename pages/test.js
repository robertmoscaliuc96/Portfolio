import Navbar from '../components/layout/Navbar'
import Map from '../components/layout/Map';
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
        <div className="test-image">
                    <div className="test-inner">
                        <Map/>
                    </div>

                
            </div>
    </Fragment>
    );

export default Test;