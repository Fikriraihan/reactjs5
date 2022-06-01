import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 5.5rem;
  color: white;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  margin: auto;
  color: ${({ theme }) => theme.colors.header};
  font-weight: 900;
`;

export const H2 = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: #e8be02;
`;

export const H3 = styled.h3`
  color: #e8be02;
  font-weight: 900;
  font-size: 20px;
`;

export const H4 = styled.h4`
  text-align: left;
  padding-left: 35px;

  color: ${({ color }) => color};
`;

export const P = styled.p`
  color: #4f4d53;
  font-size: 1.3rem;
  line-height: 1.5;
  text-align: center;
  padding: 0.5vw 16vw;
`;
