import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import sliderImage from "./SliderImage";

import "./index.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = sliderImage.length;
  const activateSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="prev" />
      <AiOutlineArrowRight className="next" onClick={activateSlide} />
      {sliderImage.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="img-content">
                <img src={slide.imageUrl} alt="slider" />
                <div className="content">{slide.heading}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
