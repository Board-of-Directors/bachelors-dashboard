import { MultiselectModal, Text } from "@/components/common";
import { ApplicantList } from "../ApplicantList/ApplicantList";
import { NewApplicantModalProps } from "./NewApplicantModal.types";

const items = [
  { label: "Третьяков Артём Александрович", value: "1111-2222" },
  { label: "Катешов Илья Никитич", value: "2222-3333" },
  { label: "Вебер Олег Владимирович", value: "3333-4444" },
  { label: "Константинов Никита Игоревич", value: "4444-5555" },
];

export const NewApplicantModal = ({ onAddApplicants, ...props }: NewApplicantModalProps) => (
  <MultiselectModal
    selectProps={{ label: "Абитуриент", placeholder: "Выберите абитуриента" }}
    header={<Text className="text-2xl text-text-back">Абитуриенты</Text>}
    onSubmit={onAddApplicants}
    items={items}
    {...props}
  >
    {({ elements, remove }) => (
      <ApplicantList
        applicants={elements.map(({ label, value }) => ({ name: label, snils: value }))}
        onDeleteApplicant={remove}
      />
    )}
  </MultiselectModal>
);
