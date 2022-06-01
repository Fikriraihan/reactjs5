import styled from "styled-components";

export const Section2 = styled.div`
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 80px 0;
`;

export const Section4 = styled.div`
  display: inline-flex;
`;

export const Section5 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 50px;
  color: #fff;
`;

export const Section6 = styled.div`
  align-items: start;
  line-height: 1rem;
`;

export const Section7 = styled.div`
  display: block;
  line-height: 1px;
  font-weight: 100;
  font-size: 1rem;
  padding-left: 35px;
  color: ${({ color }) => color};

  div {
    color: #000;
  }
  h4 {
    font-weight: 100;
  }
`;
