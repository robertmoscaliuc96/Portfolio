import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'



const Ul = styled.ul`
  
  ul{
    list-style: none;
    display: flex;
    gap:2rem;
    flex-flow: row nowrap;
  }
  li a:hover{
      color:#f48c06;
  }
  li { 
    padding: 18px 10 px;
  }
  li a{

      color:white;
  }

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
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" href='/'>Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href='/projects'>Projects</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href='/about'>About</Link>
          </li>
         </ul>
    </Ul>
  )
}

export default RightNav