import { Modal, ModalContent } from "@nextui-org/react";
import { motionProps } from "./Drawer.styles";
import { DrawerProps } from "./Drawer.types";

export const Drawer = ({ isOpen, onOpenChange, children, ...props }: DrawerProps) => (
  <Modal
    scrollBehavior="inside"
    isOpen={isOpen}
    onOpenChange={onOpenChange}
    placement="center"
    backdrop="opaque"
    size="full"
    classNames={{
      wrapper: "flex justify-end",
      base: "w-[80vw] bg-white !min-h-screen !h-fit !max-h-fit",
    }}
    motionProps={motionProps}
    className="h-screen max-h-screen"
    closeButton={<></>}
    {...props}
  >
    <ModalContent>{children}</ModalContent>
  </Modal>
);
