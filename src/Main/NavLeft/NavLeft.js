import React, { useState } from 'react';

import MenuList from './MenuList';



const NavLeft = ({isLogin, selectTeam, SelectTeam, selectPart,selectRoom, onSelect, teams, parts, rooms, members}) => {
    
    
    
    const getPostList=()=>{ //post list가져오는 함수

        
    }

    return (
        <div className='NavLeft'>
            <h1>NavLeft</h1>
            <h4>selectTeam : {selectTeam}</h4>
            <h4>selectPart : {selectPart}</h4>
            <h4>selectRoom : {selectRoom}</h4>
           
            
            <MenuList isLogin={isLogin} menuTitle={"team"}  menus = {teams} SelectMenu={SelectTeam}  onSelect={onSelect}/>
            <MenuList isLogin={isLogin} menuTitle={"part"} menus={parts} SelectMenu={selectPart} onSelect={onSelect}/>
            <MenuList isLogin={isLogin} menuTitle={"message"} menus={rooms} SelectMenu={selectRoom} onSelect={onSelect}/>
            <MenuList isLogin={isLogin} menuTitle={"member"} menus={members} />
            


        </div>
    );
};

export default NavLeft;