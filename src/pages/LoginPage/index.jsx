import React from 'react';
import GoogleSignUp from '../../components/google';
import KakaoSignUp from '../../components/kakao';
import { LoginBox, LoginWrapper } from './styled';

const LoginPage = () => {
    return (
        <LoginWrapper>
            <LoginBox>
                <h2>소셜 로그인</h2>
                <ul>
                    <li>
                        <KakaoSignUp />
                    </li>
                    <li>
                        <GoogleSignUp />
                    </li>
                    <li>
                        <button>NAVER로 로그인</button>
                    </li>
                    <li>
                        <button>GITHUB로 로그인</button>
                    </li>
                </ul>
            </LoginBox>
        </LoginWrapper>
    );
};

export default LoginPage;