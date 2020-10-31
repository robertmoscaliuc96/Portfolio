import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'
import HeadInner from './Head'



const Ul = styled.ul`
  

  @media (max-width: 968px) {
      ul{
      flex-flow: column nowrap;
      padding-top:5rem;
      font-size:1.4rem;
      justify-content:center;
      align-items:center;

      }
    
    background-color: #757575;
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

  return (
    <Ul open={open}>
    <HeadInner/>

        <div className="navbar">

          <div className="logo-navbar">
            <img src="/robertLogo.svg" alt=".robert" width={100} height={100} className="robert-logo"/>
          </div>


          <div className="page-navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link  href='/'><i class="fas fa-home"></i></Link>
              </li>

              <li className="nav-item">
                <Link  href='/projects'><i class="fas fa-laptop-code"></i></Link>
              </li>

              <li className="nav-item">
                <Link href='/about'><i class="fas fa-info-circle"></i></Link>
              </li>
            </ul>
          </div>

        <div className="social-navbar">
          <ul className="nav-social">
              <li className="nav-social-item">
                <Link  href='/'><i className="fab fa-github"></i></Link>
              </li>

              <li className="nav-social-item">
                <Link  href='/projects'><i className="fab fa-linkedin-in"></i></Link>
              </li>
            </ul>
          </div>
        </div>
    </Ul>
  )
}

export default RightNav