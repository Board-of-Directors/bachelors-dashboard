import styled, { css } from "styled-components";
import { Link } from "@nextui-org/react";

export const StyledLink = styled(Link)<{
  isActive: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px 0 32px 0;
  gap: 12px;

  ${({ isActive }) =>
    isActive
      ? css`
          &::after {
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            height: 4px;
            width: 100%;
            background-color: #eb6b2e;
          }
        `
      : null}
`;
