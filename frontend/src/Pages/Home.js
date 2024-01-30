import React from "react";
import "../Styles/Css/home.css";
import MovieItem from "../Components/MovieItem";
import SlideItem from "../Components/SlidesItem";
const Home = () => {
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
                <ul className="introSlide">
                    <li>
                        <SlideItem name="웡카" />
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
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