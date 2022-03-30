/** @format */
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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
        <Fade left>
          <h1>{title}</h1>
        </Fade>
        <Fade right>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <Zoom bottom>
            <RightButton>{rightBtnText}</RightButton>
          </Zoom>
          <Zoom top>
            {leftBtnText && <LeftButton>{leftBtnText}</LeftButton>}
          </Zoom>
        </ButtonGroup>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  justify-content: space-between;
  text-align:center
   align-items: center;
  flex-direction:column;
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
`;
const ItemText = styled.div`
  padding-top: 13px;
  text-align: center;
  z-index: 10;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const RightButton = styled.div`
  background-color: white;
  width: 246px;
  height: 40px;
  opacity: 0.65;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
const LeftButton = styled.div`
  background-color: rgba(24, 26, 48, 0.8);
  width: 246px;
  height: 40px;
  opacity: 0.8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
const Buttons = styled.div``;
