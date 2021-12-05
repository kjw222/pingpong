import React, { Fragment, useState, useEffect } from "react";
import Member from "./Member/Member";
import Main from "./Main/Main";

export default function(){
   
    
    //*조건부 렌더링 session에 login 값이 없으면 로그인창/있으면 main 진입
    const [isLogin, setIsLogin]  = useState('');     //로그인 여부 확인 default false
    // getDerivedStateFromProps=(props, state)=>{
    //     console.log("login check start");
    //    // setIsLogin(1);      //login member id set
        
    // }
    useEffect(() => {   //1. main url로 접근했을 때 제일 처음 session에서 login이 되어있는지 확인.
       setIsLogin(1);      //session에서 가져온 login member id set
    },[]);

    const CheckMember=(isLogin)=>{      //2. login 여부에 따라 components(Member/Main 택1) return
        console.log('isLogin??'+isLogin);
        if(isLogin === ''){     //login이 안 되어있는 상태면 Member로 이동(로그인/회원가입)
            return <Member/>; 
        }else{                  //login이 되어있는 상태면 Main으로 이동(Post/Chat)
            return  <Main isLogin={isLogin}/>;
        }
       
    } 
    return(
        <div id="App">
           
           <Fragment>
               {CheckMember(isLogin)}
            </Fragment>
        </div>
    )
}