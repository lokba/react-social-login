import React from 'react';
import { LoginBox, LoginWrapper } from './styled';

const LoginPage = () => {
    return (
        <LoginWrapper>
            <LoginBox>
                <h2>소셜 로그인</h2>
                <ul>
                    <li>
                        <button>KAKAO로 로그인</button>
                    </li>
                    <li>
                        <button>NAVER로 로그인</button>
                    </li>
                    <li>
                        <button>GOOGLE로 로그인</button>
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