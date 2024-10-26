import { Button, Drawer } from "@/components/common";
import { Grid } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { Block } from "./NewTaskDrawer.styles";
import { NewTaskDrawerProps } from "./NewTaskDrawer.types";
import { TaskSchema, TaskSchemaType } from "./TaskSchema";

export const NewTaskDrawer = (props: NewTaskDrawerProps) => {
  const form = useForm<TaskSchemaType>({
    resolver: zodResolver(TaskSchema),
  });

  const onClose = () => props.onOpenChange(false);

  return (
    <FormProvider {...form}>
      <Drawer {...props}>
        <Block flexDirection="row" justifyContent="space-between">
          <Button
            isIconOnly
            color={"secondary"}
            className={"!rounded-full !size-10 shrink-0"}
            size={"sm"}
            onClick={onClose}
          >
            <XIcon className="size-4 shrink-0" />
          </Button>
        </Block>
        <Grid templateColumns="repeat(8, 1fr)">
        </Grid>
      </Drawer>
    </FormProvider>
  );
};
