import React from "react";
import "../Styles/Css/home.css";
import MovieItem from "../Components/MovieItem";
import SlideItem from "../Components/SlidesItem";
import Slider from "react-slick";
const Home = () => {
    const settings = {
        dots: false,
        Infinity: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>
            {/*intro */}
            <section className="introSec">
                {/*header*/}
                <header>
                    <div className="logo"></div>
                    <ul className="menu">
                        <li>예매하기</li>
                        <li>Login</li>
                    </ul>
                </header>
                {/*slide */}
                <div className="introSlide">
                    <Slider {...settings}>
                        {/*<SlideItem name="짱구" />
                        <SlideItem name="skeh" />*/}
                        <div>1</div>
                        <div>2</div>
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