import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
 
} from 'reactstrap';
import "./MyCarousel.css"
import styled from 'styled-components';


const items = [
  {
    src:
      "client/src/components/Carousel/imagesdamian-patkowski-T-LfvX-7IVg-unsplash.jpg",
    altText: "",
    caption: "Be the change that you wish to see in the world. ― Mahatma Gandhi"
  },
  {
    src: "https://www.fillmurray.com/1600/800",
    altText: "",
    caption:
      "In three words I can sum up everything I've learned about life: it goes on. ― Robert Frost"
  },
  {
    src: "https://www.fillmurray.com/1600/800",
    altText: "",
    caption:
      "If you tell the truth, you don't have to remember anything. ― Mark Twain"
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  //styles for slides 

 const ReadMoreButton = styled.button`
     
  
  `

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption color={`green`} captionText={item.caption} captionHeader={item.caption} />
        
        </CarouselItem>
    );
  });

 

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
      className="carousel-indicator"
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
      <ReadMoreButton class="readme-button" >  
        <span>Read More</span>
      </ReadMoreButton>
    </Carousel>
  );
}

export default Example;
