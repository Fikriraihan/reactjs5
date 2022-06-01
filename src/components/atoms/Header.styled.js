import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img``;
