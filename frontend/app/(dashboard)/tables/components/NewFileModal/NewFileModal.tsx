import { getAllGroups } from "@/api/request/group";
import { GetAllGroupsResponse } from "@/api/request/group/types";
import { Modal, ModalProps, SelectItem, Text, ToggleButton } from "@/components/common";
import { GET_ALL_GROUPS_KEY } from "@/constants";
import { FileType } from "@/types/file";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { NewFileForm, NewTableForm } from "./Forms";
import { toggleButtonItems } from "./NewFileModal.data";

/**
 * NewFileModal component
 * @param props - Modal properties
 * @returns - Rendered NewFileModal component
 */
export const NewFileModal = ({ onOpenChange, ...props }: ModalProps) => {
  const [selectedItem, setSelectedItem] = useState<FileType>(toggleButtonItems[0].value);
  const { data: groups } = useQuery<GetAllGroupsResponse, Error>({
    queryKey: GET_ALL_GROUPS_KEY,
    queryFn: getAllGroups,
  });

  const selectItems = useMemo<SelectItem[]>(
    () =>
      groups?.groups.map((group) => ({
        label: group.name,
        value: group.id,
      })) ?? [],
    [groups],
  );

  const handleClose = () => onOpenChange(false);

  return (
    <Modal
      {...props}
      onOpenChange={onOpenChange}
      header={<Text className="font-semibold text-2xl">Новый документ</Text>}
      classNames={{ content: "!mt-[100px]" }}
      placement="top"
      body={
        <>
          <ToggleButton
            selectedItem={selectedItem}
            onSelect={setSelectedItem}
            items={toggleButtonItems}
            label="Тип документа"
          />
          {selectedItem === "table" ? (
            <NewTableForm onSuccess={handleClose} selectItems={selectItems} />
          ) : (
            <NewFileForm onSuccess={handleClose} selectItems={selectItems} />
          )}
        </>
      }
    />
  );
};
