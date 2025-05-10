import { createContext, useContext, useState } from "react";
import { File, FileManagerContextType } from "./FileManager.types";

const FileManagerContext = createContext<FileManagerContextType | undefined>(undefined);

export const FileManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [files, setFiles] = useState<File[]>([]);

  const moveFile = (fileId: number, targetFolderId: number) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) => (file.id === fileId ? { ...file, folderId: targetFolderId } : file)),
    );
  };

  return (
    <FileManagerContext.Provider value={{ files, setFiles, moveFile }}>
      {children}
    </FileManagerContext.Provider>
  );
};

export const useFileManager = () => {
  const context = useContext(FileManagerContext);
  if (!context) {
    throw new Error("useFileManager must be used within a FileManagerProvider");
  }
  return context;
};
