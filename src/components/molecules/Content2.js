import React from "react";
import { Images2 } from "../atoms/Images.styled";
import { Section3, Section4, Section7 } from "../atoms/Section.styled";

function Content2() {
  return (
    <div>
      <Section3>
        <Section4>
          <Images2 src="./images/img_lisa_circle.png" alt="lisa gtd" />
          <Section7 color="#e8be02">
            <h4>
              Lisa <br />
            </h4>
            <div>
              <h4>lisa@gtd.co</h4>
            </div>
          </Section7>
        </Section4>
        <Section4>
          <Images2 src="./images/img_danielle_circle.png" alt="lisa gtd" />
          <Section7 color="#e8be02">
            <h4>Danielle</h4>
            <div>
              <h4>danielle@gtd.co</h4>
            </div>
            <div>(123) 456-7890</div>
          </Section7>
        </Section4>
      </Section3>
    </div>
  );
}

export default Content2;
