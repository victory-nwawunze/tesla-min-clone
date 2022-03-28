/** @format */
import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online For Touches Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISITING INVENTORY"
      />
      <Section
        title="Model Y"
        description="Order Online For Touches Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISITING INVENTORY"
      />
      <Section
        title="Model 3"
        description="Order Online For Touches Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISITING INVENTORY"
      />
      <Section
        title="Model X"
        description="Order Online For Touches Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISITING INVENTORY"
      />
      <Section
        title="Model S"
        description="Order Online For Touches Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISITING INVENTORY"
      />
      <Section
        title="Little Cost Solar Panels In America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="LEARN MORE"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Cost Less Than A New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="LEARN MORE"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="SHOP NOW"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
