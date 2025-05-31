import { Button } from "@/components/common";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as NextModal,
} from "@nextui-org/modal";
import { XIcon } from "lucide-react";
import { ModalBuilderProps } from "./Modal.types";

export const Modal = ({ header, body, footer, classNames, ...props }: ModalBuilderProps) => (
  <NextModal
    {...props}
    hideCloseButton
    classNames={{
      base: "rounded-[10px] bg-white flex flex-col gap-6",
      body: "w-full flex flex-col gap-6 py-0",
      header:
        "w-full flex flex-row justify-between items-center p-6 border-b-2 border-button-secondary",
      footer: "w-full flex flex-row gap-4 pt-0 pb-6",
      ...classNames,
    }}
  >
    <ModalContent className={classNames?.content}>
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
