import React, { useEffect, useState } from 'react';
import NaverLogin from 'react-naver-login';

const NaverSignUp = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (userInfo) {
            const token = localStorage.getItem('com.naver.nid.access_token');
            console.log("email", userInfo.data.email);
            console.log("nickname", userInfo.data.nickname);
            console.log("access_token", token.slice(7));
        }
    }, [userInfo]);

    const responseNaver = (res) => {
        setUserInfo({ data: res });
    }

    return (
        <NaverLogin
            clientId="5Gg_jI6hjECtYaifsD82"
            callbackUrl="http://localhost:3000"
            onSuccess={responseNaver}
            render={(props) => <div onClick={props.onClick}>NAVER로 로그인하기</div>}
        />
    );
};

export default NaverSignUp;

