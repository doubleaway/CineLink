import React from "react";
import "../Styles/Css/home.css";
import MovieItem from "../Components/MovieItem";
import SlideItem from "../Components/SlidesItem";
import styled from "styled-components";
import Slider from "react-slick";
const Home = () => {
    const settings = {
        dots: true,
        Infinity: true,
        arrows: false,
        speed: 500,
    }
    const HeaderStyle = styled.header`
        width: 100%;
        height: 70px;
        position: sticky;
        top: 0;
        background: rgba(0,0,0,0.8);
        z-index: 10;
        display: flex;
        justify-content: space-between;
        padding: 0 2.5%;
        box-sizing: border-box;
        color: white;
        align-items: center;
    `;
    const MenuList = styled.ul`
        display: flex;
        width: 15%;
        min-width: 150px;
        justify-content: space-around;
        align-items: center;
    `;
    return (
        <>
            {/*intro */}
            <section className="introSec">
                {/*header*/}
                <HeaderStyle>
                    <div className="logo">1</div>
                    <MenuList>
                        <li>예매하기</li>
                        <li>Login</li>
                    </MenuList>
                </HeaderStyle>
                {/*slide */}
                <div className="introSlide">
                    <Slider {...settings}>
                        <SlideItem name="짱구" />
                        <SlideItem name="skeh" />
                    </Slider>
                </div>
            </section>
            {/*== intro end */}
            {/*Top 10 ranking */}
            <section className="topRanking">
                <h2>Top 10</h2>
                <div className="topMovieList">
                    <MovieItem title="웡카" />
                </div>
            </section>
            {/*== Top 10 ranking end */}
        </>
    )
}

export default Home;