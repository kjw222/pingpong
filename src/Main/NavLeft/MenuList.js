import React, { useState } from 'react';
import Menu from './Menu';

const MenuList = ({isLogin, menuTitle, menus, SelectMenu, onSelect}) => {
   
    
    return (
        <div className="MenuList">
            <h2>[{menuTitle}]</h2>
           
            <ul>
                {menus.map(menu=> <Menu key={menu.id} title={menu.name} setSelectTeam={setSelectTeam}/>)}
            </ul> 
            <input
                value={addMenu}
                onAddMenu={this.handleAdd}
            />
        </div>
    );
};

export default MenuList;