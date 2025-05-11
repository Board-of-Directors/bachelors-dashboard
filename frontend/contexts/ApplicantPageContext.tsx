import { createContext, PropsWithChildren, useContext } from "react";

interface ApplicantPageContextType {
  insurance: string;
}

const initialContext: ApplicantPageContextType = {
  insurance: "",
};

const ApplicantPageContext = createContext<ApplicantPageContextType>(initialContext);

export const ApplicantPageContextProvider = ({
  insurance,
  children,
}: PropsWithChildren<ApplicantPageContextType>) => (
  <ApplicantPageContext.Provider value={{ insurance }}>{children}</ApplicantPageContext.Provider>
);

export const useApplicantPageContext = () => useContext(ApplicantPageContext);
