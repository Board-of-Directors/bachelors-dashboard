import { Maybe } from "@/types/utils";
import { Editor } from "@tiptap/react";
import { createContext, PropsWithChildren, useContext } from "react";

interface DescriptionBlockContextType {
  editor: Maybe<Editor>;
}

const DescriptionBlockContext = createContext<DescriptionBlockContextType>({ editor: null });

const useDescriptionBlockContext = () => useContext(DescriptionBlockContext);

const DescriptionBlockProvider = ({
  editor,
  children,
}: PropsWithChildren<DescriptionBlockContextType>) => (
  <DescriptionBlockContext.Provider value={{ editor: editor }}>
    {children}
  </DescriptionBlockContext.Provider>
);

export { DescriptionBlockProvider, useDescriptionBlockContext };
