import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "./MyCarousel.css";
import styled from "styled-components";

const items = [
  {
    src: "./images/1.jpg",
    altText: "",
    caption:
      "Be the change that you wish to see in the world. ― Mahatma Gandhi",
    button: ""
  },
  {
    src: "./images/2.jpg",
    altText: "",
    caption:
      "In three words I can sum up everything I've learned about life: it goes on. ― Robert Frost",
    button: ""
  },
  {
    src: "./images/3.jpg",
    altText: "",
    caption:
      "If you tell the truth, you don't have to remember anything. ― Mark Twain",
    button: ""
  }
];

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };




  const slides = items.map(item => {
    return (
      <CarouselItem
        class="carousel-item"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        
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
    </Carousel>
  );
};

export default MyCarousel;
