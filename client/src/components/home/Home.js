import React from "react";
import Carousel from "../Carousel/MyCarousel.js";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Home = () => {
  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    self-align: center;
    background-color: orange;
    width: 10rem;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 900;

    font-family: 'Roboto';
  `;
  const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

  return (
    <div className="homepage">
      <WrapperDiv className="wrapper">
        <Carousel />
        <StyledButton variant="outlined">
          Read More
        </StyledButton>
      </WrapperDiv>
    </div>
  );
};

export default Home;
