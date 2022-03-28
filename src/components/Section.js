/** @format */

import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({
  title,
  backgroundImg,
  description,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <Fade>
        <Buttons>
          <ButonGroup>
            <RightButton>{rightBtnText}</RightButton>
            <LeftButton>{leftBtnText}</LeftButton>
          </ButonGroup>
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div``;
const Buttons = styled.div``;
const ButonGroup = styled.div``;
const LeftButton = styled.div``;
const RightButton = styled(LeftButton)``;
