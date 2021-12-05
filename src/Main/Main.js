import React, { useState, useEffect } from 'react';

import Contents from './Contents/Contents';
import NavLeft from './NavLeft/NavLeft';
import NavTop from './NavTop/NavTop';
import ProfileRight from './ProfileRight/ProfileRight';

import styles from '../assets/scss/Main.scss';

import teams from "../assets/json/team.json";
import parts from "../assets/json/part.json";
import rooms from "../assets/json/room.json";
import members from "../assets/json/member.json";


const Main = ({isLogin}) => {
    const [selectTeam, setSelectTeam]=useState(1);
    const [selectPart, setSelectPart]=useState(1);
    const [selectRoom, setSelectRoom]=useState(1);
   
    const onSelect = useEffect((e)=>{
        switch({title}){
            case 'team':setSelectTeam(e.target.id);
            case 'part':setSelectTeam(e.target.id);
            case 'message': setSelectRoom(e.target.id);
            default:
                return state;
        }
        
    },[props.selectTeam]);

   
    return (
        <div className= 'Main'>
            <h1>here is Main. Login Member name is {isLogin}</h1>
             <NavLeft isLogin={isLogin} 
                     selectTeam={selectTeam}
                     selectPart={selectPart}
                     selectRoom={selectRoom}
                     onSelect={onSelect}
                    teams = {teams}    
                    parts={parts}  
                    rooms={rooms}   
                    members={members}   
                     />
                <div className = 'Body'>
                    <NavTop isLogin={isLogin}/>
                    <Contents isLogin={isLogin}/>
                </div>
            <ProfileRight isLogin={isLogin}/> 
        </div>
    );
};

export default Main;