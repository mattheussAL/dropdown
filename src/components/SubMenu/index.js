import React, { useState } from 'react';

import { SidebarLink, SidebarLabel, DropdownLink } from './styles';

function SubMenu({ item }) {
  const [subnav, setSubNav] = useState(false);

  const showSubnav = () => setSubNav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav} >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav &&
            subnav ? item.iconOpened : item.subNav ? item.iconClosed : null
          }
        </div>
      </SidebarLink>
      {
        subnav && item.subNav.map((item, index) => {
          return (
            <DropdownLink to="#" item={item} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          )
        })
      }
    </>
  );
}

export default SubMenu;