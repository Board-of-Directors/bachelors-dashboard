import {
  Modal as NextModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { ModalBuilderProps } from "./Modal.types";
import { XIcon } from "lucide-react";
import { Button } from "@/components/common";

export const Modal = ({ header, body, footer, ...props }: ModalBuilderProps) => (
  <NextModal
    {...props}
    hideCloseButton
    classNames={{
      base: "rounded-[10px] bg-white flex flex-col gap-6",
      body: "w-full flex flex-col gap-6 py-0",
      header:
        "w-full flex flex-row justify-between items-center p-6 border-b-2 border-button-secondary",
      footer: "w-full flex flex-row gap-4 pt-0 pb-6",
    }}
  >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader>
            {header}
            <Button
              isIconOnly
              color={"secondary"}
              className={"!rounded-full !size-10"}
              size={"sm"}
              onClick={onClose}
            >
              <XIcon size={"20px"} />
            </Button>
          </ModalHeader>
          <ModalBody>{body}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </>
      )}
    </ModalContent>
  </NextModal>
);
