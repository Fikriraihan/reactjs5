import React from "react";
import { Slider } from "../atoms/Slider.styled";
import { Banner } from "../atoms/Images.styled";
import { H1 } from "../atoms/Typography.styled";

function Carousel() {
  return (
    <Slider>
      <Banner src="./images/img_hero.jpg" />
      <H1>Hello, we’re Gtd.</H1>
    </Slider>
  );
}

export default Carousel;
