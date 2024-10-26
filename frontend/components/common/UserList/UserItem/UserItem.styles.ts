import { XIcon } from "lucide-react";
import styled from "styled-components";

const Cotainter = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover > .deleteIcon {
    color: #eb6b2e;
  }
`;

const LeftRow = styled(Cotainter)`
  justify-content: start;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteIcon = styled(XIcon)`
  color: #c7c4c4;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export { Cotainter, LeftRow, Avatar, DeleteIcon };
