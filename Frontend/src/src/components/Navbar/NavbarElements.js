import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
Background:#ccc;
  min-height: 80px;
  
  width:100%;
  display: flex;
  text-align:center;
  border-bottom:.1vw solid #fff;
  border-bottom-right-radius: 10vw;
    border-bottom-left-radius: 10vw;
  overflow:hidden;
  z-index: 10;
  position:fixed;
  top:0;
  z-index:5;
  /* Third Nav */
  /* justify-content: flex-start; */
  ${props => {
    if (props.toggle==='business') {
      return `
         color:#fff!important;
          text-align:right;
          z-index:5;
      `;
    
    }
    if (props.toggle==='client') {
      return `
          background-color:#ccc;
          border-radius:0;
          text-align:right;
          z-index:5;
          border-bottom:.1vw solid #000;
      `;
    
    }
  }
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  margin:0 auto;

  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
//rotation to the right zoom in zoom out
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const H1 = styled.h1`
  margin:vw auto;
  color:#fff;

  font-weight:200;
  font-size:2.7vw;
`
