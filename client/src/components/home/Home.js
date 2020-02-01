import React from "react";
import Carousel from "../Carousel/MyCarousel.js";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Home = () => {

  const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FEF9C7;
  color: #7e685A;
  height:90vh;
  font-family: Ubuntu;
  text-align: justify;
  padding: 2rem;
  
`;

const StyledButton = styled.button`
display: flex;
justify-content: center;
self-align: center;
background-color: orange;
color: #7E685A;
width: 10rem;
padding: 1rem;
margin-top: 2rem;
font-size: 1.2rem;
font-weight: 900;


font-family: 'Roboto';
`;

const Paragraph = styled.p`

    margin-top: 3rem;

`


  return (
    <div className="homepage">
      <WrapperDiv className="wrapper">
        <Carousel />
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta sequi reprehenderit tempore dolores at incidunt tempora ipsum eveniet illo, dolor sed dolorum placeat, delectus adipisci consequuntur minus! Molestiae, nostrum!</Paragraph>
        <StyledButton variant="outlined">
          Read More
        </StyledButton>
        <h1></h1>


      </WrapperDiv>
    </div>
  );
};

export default Home;
