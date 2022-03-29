/** @format */

import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";
function Section({
  title,
  description,
  backgroundImg,
  rightBtnText,
  leftBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const ItemText = styled.div`
  padding-top: 20px;
  text-align: center;
  z-index: 10;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Buttons = styled.div``;
const RightButton = styled.div``;
const LeftButton = styled.div``;
