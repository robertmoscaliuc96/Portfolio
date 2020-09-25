import React from 'react';
import styled from 'styled-components'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10 px;
  }

  @media (max-width: 968px) {
    flex-flow: column nowrap;
    background-color: #05344F;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.1rem;
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
            <a className="nav-link" to='/'>Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" to='/projects'>Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" to='/about'>About</a>
          </li>
         </ul>
    </Ul>
  )
}

export default RightNav