import Link from "next/link";
import styled from "styled-components";

const FileRow = styled.li`
  width: 100%;
  padding: 20px 20px 20px 64px;
  border-top: 2px solid #f3f3f3;

  transition: background-color 200ms;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const FileLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export { FileRow, FileLink, Row };
