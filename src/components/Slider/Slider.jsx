import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import sliderImage from "./SliderImage";

import "./index.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="slider">
      <AiOutlineArrowLeft className="prev" />
      <AiOutlineArrowRight className="next" />
      {sliderImage.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slider current" : "slider"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.imageUrl} alt="slider" />
                <div>{slide.heading}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
