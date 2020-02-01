import React from "react";
import Carousel from "../Carousel/MyCarousel.js";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Home.css";

const Home = () => {
  const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fef9c7;
    color: #7e685a;
    height: 100vh;
    font-family: Ubuntu;
    text-align: justify;
    padding: 2rem;
    max-width: 46rem;
  `;

  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    self-align: center;
    background-color: orange;
    color: #7e685a;
    width: 10rem;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 3rem;

    font-family: "Roboto";
  `;

  const Paragraph = styled.p`
    margin-top: 3rem;
  `;

  return (
    <div className="homepage">
      <WrapperDiv className="wrapper">
        <Carousel />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta
          sequi reprehenderit tempore dolores at incidunt tempora ipsum eveniet
          illo, dolor sed dolorum placeat, delectus adipisci consequuntur minus!
          Molestiae, nostrum!
        </Paragraph>
        <Link to="/stories">
          <StyledButton>Read More</StyledButton>
        </Link>
      </WrapperDiv>
    </div>
  );
};

export default Home;
