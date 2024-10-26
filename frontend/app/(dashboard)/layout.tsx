import { MainContainer, Navbar } from "@/components";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => (
  <MainContainer>
    <Navbar />
    {children}
  </MainContainer>
);

export default DashboardLayout;
