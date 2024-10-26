import { Container } from "@/components/common/FolderList/Folder/Folder.styles";
import { FolderItem } from "@/components/common/FolderList/Folder/FolderItem/FolderItem";
import { useState } from "react";
import { FolderProps } from "./Folder.types";
import { detectHover } from "./Folder.utils";

export const Folder = ({ files, onHover }: FolderProps) => {
  const [hoveredChildList, setHoveredChildList] = useState<Record<number, boolean>>({});

  const handleHover = (index: number, isHover: boolean) => {
    if (hoveredChildList[index] && !isHover) {
      // if current hovered element not hovering anymore
      delete hoveredChildList[index];
    } else if (!hoveredChildList[index] && isHover) {
      // if current element is hovering
      hoveredChildList[index] = true;
    }

    onHover(detectHover(hoveredChildList));
  };

  return (
    <Container>
      {files.map((file, index) => (
        <FolderItem onHover={(isHover) => handleHover(index, isHover)} file={file} key={index} />
      ))}
    </Container>
  );
};
