import React, { useState } from 'react';

// Components
import SubMenu from '../SubMenu';
// Datas Dropdown
import { SidebarData } from '../SidebarData';
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './styles';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Sidebar() {
  const [click, setClick] = useState(false);

  const showSidebar = () => setClick(!click);

  return (
    <Nav>
      <NavIcon to="#"><FaIcons.FaBars onClick={showSidebar}/></NavIcon>
      
      <SidebarNav sidebar={click}>
        <SidebarWrap>

          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
          </NavIcon>

          {SidebarData.map((item, index) => <SubMenu item={item} key={index}/>)}

        </SidebarWrap>
      </SidebarNav>
    </Nav>
  );
}

export default Sidebar;