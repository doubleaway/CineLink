import React from "react";
import styled from "styled-components";
const SlideItemStyle = styled`
    background: #222;
    width: 100%; height: 100%;
    margin: 0 auto;
`;
//props로 image path, name,
const SlideItem = ({ name, imagePath }) => {
    return (
        <>
            <SlideItemStyle>{name}</SlideItemStyle>
            <div>{name} 일반 div</div>
        </>
    )
}

export default SlideItem;