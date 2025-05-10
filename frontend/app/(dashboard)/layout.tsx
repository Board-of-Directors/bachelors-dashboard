import { Navbar } from "@/components/common/Navbar/Navbar";
import { MainContainer } from "@/components/shared/MainContainer/MainContainer";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => (
  <MainContainer>
    <Navbar />
    {children}
  </MainContainer>
);

export default DashboardLayout;
