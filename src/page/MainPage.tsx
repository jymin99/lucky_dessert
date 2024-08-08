import React from "react";
import styled from "styled-components";
import GlobalFont from "../styles/GlobalFont";
import GlobalStyle from "../styles/GlobalStyle";
import Logo from '../assets/images/logo.png';
import Kakao from '../assets/images/kakao.png'
import Insta from '../assets/images/insta.png'
import Naver from '../assets/images/naver.png'

const Button = styled.a`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #F5F3CB;
    width: 298px;
    height: 54px;
    min-width: 298px;
    min-height: 54px;
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
    justify-content: center;
    background-color: #FFFEF3;
    align-items: center;
    flex-direction: column;
    font-family: chab;  
    font-size:18px;  
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
`;
const Top = styled.text`
    color: #8AC97F;
    margin-bottom: 15px;
    margin-top: 8px;
`;
const Image = styled.img`
    width: 135px;
    height: 135px;
    margin: 30px;
    /* 이미지 url로드 */
`;
const ImageLink = styled.a`
    width: 47px;
    margin-right: 15px;
    margin-left: 15px;
`;
const SocialLink=styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom:20px;
`;

const MainPage: React.FC = () => {
    return (
        <>
            <GlobalFont />
            <GlobalStyle />
            <Container>
                {/* 로고 삽입 */}
                <Image src={Logo} alt="logo" />
                {/* 소셜 링크들 */}
                <SocialLink>
                    <ImageLink href="https://www.instagram.com/lucky7_dessert?igsh=N3F5aDhhdDh2ems3&utm_source=qr"  target="_blank" rel="noopener noreferrer">
                        <img src={Insta} alt="insta"/>
                    </ImageLink>
                    <ImageLink href="https://pf.kakao.com/_eWeeG" target="_blank" rel="noopener noreferrer">
                        <img src={Kakao} alt="kakao"/>
                    </ImageLink>
                    <ImageLink href="https://m.place.naver.com/restaurant/1886953047/home" target="_blank" rel="noopener noreferrer" >
                    <img src={Naver} alt="naver"/>
                    </ImageLink>
                </SocialLink>
                {/* 음식 목록->배송페이지로 바로 이동 */}
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
                {/* 매장 위치 페이지 */}
                <Top>
                    매장 위치
                </Top>
                <Button href="https://m.place.naver.com/restaurant/1886953047/home?entry=plt" target="_blank" rel="noopener noreferrer">매장 오시는 길</Button>
            </Container>

        </>
    );
}
export default MainPage;
