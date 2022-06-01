import React from "react";
import { Section2 } from "../atoms/Section.styled";
import { H2, P } from "../atoms/Typography.styled";
import { Images } from "../atoms/Images.styled";

function Content1() {
  return (
    <>
      <Section2>
        <Images src="./images/img_lisa_circle.png" alt="lisa gtd" />
        <Images src="./images/img_danielle_circle.png" alt="danielle gtd" />
        <Images src="./images/img_brian_circle.png" alt="brian gtd" />
      </Section2>
      <H2>How it started</H2>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c ulpa qui officia deserunt mollit anim id est laborum.
      </P>
    </>
  );
}

export default Content1;
