/** @format */
import React from "react";
import styled from "styled-components";
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
          <RightButton>{rightBtnText}</RightButton>
          <LeftButton>{leftBtnText}</LeftButton>
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
const LeftButton = styled.div``;
const Buttons = styled.div``;
