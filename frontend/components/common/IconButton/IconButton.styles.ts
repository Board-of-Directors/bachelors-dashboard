import styled from "styled-components";

export const Button = styled.button<{
  hoverBackground?: string;
}>`
  position: relative;
  z-index: 20;
  transition: background-color 200ms;

  &:hover::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ hoverBackground }) => hoverBackground ?? "#18181810"};
    left: -50%;
    top: -50%;
    z-index: 0;
  }
`;
