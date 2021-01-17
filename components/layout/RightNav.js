import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import HeadInner from './Head'
import {useRouter} from 'next/router'




const Ul = styled.ul`

  li a:hover{
      color:#62CBE7;
  }

  @media (max-width: 768px) {
      .navbar{
        display:flex;
        flex-flow: column nowrap;
        gap:8rem;
        height: 0;
      }
      ul{
      flex-flow: column nowrap;
      padding-top:5rem;
      font-size:1.4rem;
      position: relative;
      justify-content:center;
      align-items:center;

      
      
      }
      .robert-logo{
        display: none;
      }
      .nav-social{
        margin-top:5rem;
        font-size: 1.8rem;
      }
      .line-social{
          display:block;
          height: 8rem;
      }
      .active{
   color:var(--dif-color);
 }
 @media (max-width: 768px) {
   .navbar{
     gap:.1rem;
   }
 }

    
    background-color: #212529;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      
    }
  }
`;




const RightNav = ({ open }) => {

  const [active, setActive] = useState(1);
  const router = useRouter()

  function isActive(route){
    if(route==router.pathname){
      return "active"
    }
    else "nav-item"
  }

  return (
    <Ul open={open} active={active}>
    <HeadInner/>

        <div className="navbar">
        
          <div className="logo-navbar">
          <Link href='/'><img src="/robertlogo.png" alt=".robert" className="robert-logo"/></Link>

            </div>


          <div className="page-navbar" active={active}>
              <ul className="nav-list">
                <li className={`nav-item ${isActive('/')}`} >
                  <Link href='/' ><i className="fas fa-home"></i></Link>
                </li>

                <li className={`nav-item ${isActive('/work')}`} >
                  <Link href='/work'><i className="fas fa-laptop-code"></i></Link>
                </li>

                <li className={`nav-item ${isActive('/skills')}`} >
                  <Link href='/skills'><i className="fas fa-cog"></i></Link>
                </li>

                <li className={`nav-item ${isActive('/about')}`}>
                  <Link href='/about'><i className="fas fa-info-circle"></i></Link>
                </li>
              </ul>
            </div>

          <div className="social-navbar">
          <ul className="nav-social">
              <li className="nav-social-item">
                <Link  href='https://github.com/robertmoscaliuc96'><i className="fab fa-github"></i></Link>
              </li>

              <li className="nav-social-item">
                <Link  href='https://www.linkedin.com/in/robertmoscalir243004/'><i className="fab fa-linkedin-in"></i></Link>
              </li>
              <li>
                <div className="line-social"></div>
              </li>
            </ul>
          </div>
        </div>
    </Ul>
  )
}

export default RightNav