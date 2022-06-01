import React from "react";
import { StyledHeader, Nav, Logo } from "../atoms/Header.styled";
import { Container } from "../atoms/Container.styled";
function Navbar() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/gtd_logo.png" />
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Navbar;
