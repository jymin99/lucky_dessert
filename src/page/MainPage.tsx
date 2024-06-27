import React from "react";
import styled from "styled-components";
import GlobalFont from "../styles/GlobalFont";
import GlobalStyle from "../styles/GlobalStyle";
import Logo from '../assets/images/logo.png';

const Button = styled.a`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #F5F3CB;
    width: 298px;
    height: 54px;
    border-radius:20px; 
    :hover{
        outline-color: transparent;
        border-color: transparent;
    }
    :focus{
        outline-color: transparent;
        border-color: transparent;
    }
    margin: 15px;
    color: #605F4F;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    background-color: #FFFEF3;
    align-items: center;
    flex-direction: column;
    font-family: chab;  
    font-size:18px;  
    height: 100vh;
`;
const Top=styled.text`
    color: #8AC97F;
    margin-bottom: 15px;
    margin-top: 8px;
`;
const Image=styled.img`
    width: 135px;
    height: 135px;
    margin: 30px;
    /* 이미지 url로드 */
`;

const MainPage: React.FC = () => {
    return (
        <>
            <GlobalFont />
            <GlobalStyle />
            <Container>
                <Image src={Logo} alt="logo"/>
                <Top>
                    Special Season Menu
                </Top>
                <Button href="https://smartstore.naver.com/lucky_dessert/products/10504310663" target="_blank" rel="noopener noreferrer">수제 두바이초콜릿</Button>
                <Top>
                    Lucky Dessert Top3
                </Top>
                <Button href="https://smartstore.naver.com/lucky_dessert/products/10250304574?" target="_blank" rel="noopener noreferrer">아메리칸 쿠키 택배</Button>
                <Button href="https://smartstore.naver.com/lucky_dessert/products/10468490976" target="_blank" rel="noopener noreferrer">버터바 택배</Button>
                <Button href="https://smartstore.naver.com/lucky_dessert/products/10250623505?" target="_blank" rel="noopener noreferrer">아메리칸 스콘 택배</Button>
                <Top>
                    매장 위치
                </Top>
                <Button>매장 오시는 길</Button>
            </Container>

        </>
    );
}
export default MainPage;
