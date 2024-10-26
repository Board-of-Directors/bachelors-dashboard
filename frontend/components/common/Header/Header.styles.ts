import styled from "styled-components";

const Row = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const ContentRow = styled.span`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

const HelperRow = styled(ContentRow)`
  align-items: baseline;
`;

export { Row, ContentRow, HelperRow };
