import { Button, Drawer } from "@/components/common";
import { Grid } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { DescriptionBlock } from "./DescriptionBlock/DescriptionBlock";
import { HeaderEditor } from "./HeaderEditor/HeaderEditor";
import { Block } from "./NewTaskDrawer.styles";
import { NewTaskDrawerProps } from "./NewTaskDrawer.types";
import { RightBlock } from "./RightBlock/RightBlock";
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
          <HeaderEditor />
          <Button
            className={"!rounded-full !size-10 shrink-0"}
            color={"secondary"}
            onClick={onClose}
            size={"sm"}
            isIconOnly
          >
            <XIcon className="size-4 shrink-0" />
          </Button>
        </Block>
        <Grid templateColumns="repeat(8, 1fr)">
          <DescriptionBlock onClose={onClose}/>
          <RightBlock />
        </Grid>
      </Drawer>
    </FormProvider>
  );
};
