import React from "react";
import { Section5, Section6 } from "../atoms/Section.styled";
import { StyledFooter } from "../atoms/Footer.styled";
function FooterColumn() {
  return (
    <StyledFooter>
      <Section5>
        <Section6>
          <h3>Team </h3>
          <ul>
            <li>
              <h4>Lisa</h4>
            </li>
            <li>
              <h4>danielle</h4>
            </li>
            <li>
              <h4>Lisa</h4>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Join Us!</h4>
            </li>
          </ul>
        </Section6>
        <Section6>
          <h3>Learn More</h3>
          <ul>
            <li>
              <h4>Manifesto</h4>
            </li>
            <li>
              <h4>Works</h4>
            </li>
            <li>
              <h4>Stories</h4>
            </li>
          </ul>
        </Section6>
        <Section6>
          <h3>Meet Us</h3>
          <ul>
            <li>
              <h4>Studio</h4>
            </li>
            <li>
              <h4>Community</h4>
            </li>
            <li>
              <h4>Workshops</h4>
            </li>
          </ul>
        </Section6>
        <Section6>
          <h3>Contact</h3>
          <ul>
            <li>
              <h4>Twitter</h4>
            </li>
            <li>
              <h4>Facebook</h4>
            </li>
            <li>
              <h4>Instagram</h4>
            </li>
          </ul>
        </Section6>
      </Section5>
    </StyledFooter>
  );
}

export default FooterColumn;
