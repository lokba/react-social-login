import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';

const KakaoSignUp = () => {
    const [userInfo, setUserInfo] = useState(null);

    const responseKaKao = (res) => {
        setUserInfo({ data: res });
    }

    useEffect(() => {
        if (userInfo) {
            let user = userInfo.data.profile.kakao_account;
            console.log("access_token", userInfo.data.response.access_token);
            console.log("email", user.email)
            console.log("nickname", user.profile.nickname);
        }
    }, [userInfo]);

    const responseFail = (err) => {
        alert(err);
    }

    return (
        <KaKaoBtn
            token={'e28886760e43e257592ccbb650b15727'}
            onSuccess={responseKaKao}
            onFailure={responseFail}
            getProfile={true}
        />
    )
}

const KaKaoBtn = styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
`

export default KakaoSignUp;