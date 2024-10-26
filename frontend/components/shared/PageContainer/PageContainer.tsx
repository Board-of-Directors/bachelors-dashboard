import { WrapperProps } from "@/types/utils";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 28px 40px;
`;

export const PageContainer = ({ children, className }: WrapperProps) => (
  <Container className={className}>{children}</Container>
);
