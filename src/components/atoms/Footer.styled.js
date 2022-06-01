import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.header};
  border-top: 12px solid #e8be02;
  height: 320px;

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 2rem;
    cursor: pointer;
  }
  li {
    font-size: 1.1vw;
    line-height: 5px;
  }
  h3 {
    color: #e8be02;
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 2rem;
  }
  h4 {
    font-weight: 100;
  }
`;
