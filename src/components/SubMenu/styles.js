import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const SidebarLink = styled(Link)`
 font-size: 18px;
 list-style: none;
 text-decoration: none;

 height: 60px;
 padding: 16px;

 color: #E1E9FC;

 display: flex;
 align-items: center;
 justify-content: space-between;

 &:hover {
  background: #252831;
  border-left: 4px solid #632CE4;
  cursor: pointer;
 }
`;

export const SidebarLabel = styled.span`
 margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
 font-size: 18px;
 text-decoration: none;

 height: 60px;
 padding-left: 3rem;

 color: #F5F5F5;
 background: #414757;
 
 display: flex;
 align-items: center;

 &:hover {
  cursor: pointer;
  background: #632CE4;
 }


`;
