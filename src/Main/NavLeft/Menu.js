import React from 'react';

const Menu = ({key, title}) => {
    console.log(key, title);
    const SelectMenu=(e)=>{
        e.target.title
    }
    return (
        <li className = 'Menu' onClick={SelectMenu}>
           {title}
        </li>
    )
}

export default Menu;