import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
 background: #15171C;
 height: 80px;

 display: flex;
 align-items: center;
`;

export const NavIcon = styled(Link)`
 font-size: 2rem;

 height: 80px;
 margin-left: 2rem;

 color: #F4FBF8;

 display: flex;
 align-items: center;
 justify-content: flex-start;
`;

export const SidebarNav = styled.nav`
 position: fixed;

 top: 0;
 left: ${({sidebar}) => (sidebar ? '0': '-100%')};
 width: 250px;
 height: 100vh;
 
 background: #15171C;
 box-shadow: 0 0 6px #15171C;

 display: flex;
 justify-content: center;

 transition: left .3s ease-in;

 z-index: 10;
`;

export const SidebarWrap = styled.div`
 width: 100%;
`;
