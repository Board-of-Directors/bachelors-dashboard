import { Button, Drawer } from "@/components/common";
import { Grid } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { DescriptionBlock } from "./DescriptionBlock/DescriptionBlock";
import { HeaderEditor } from "./HeaderEditor/HeaderEditor";
import { RightBlock } from "./RightBlock/RightBlock";
import { Block } from "./TaskDrawer.styles";
import { TaskDrawerProps } from "./TaskDrawer.types";
import { TaskSchema, TaskSchemaType } from "./TaskSchema";

const DATE_FORMAT = "DD-MM-YYYY";

// const createDefaultValues = (task : Maybe<TaskResponse>) : Maybe<TaskSchemaType> => {
//   if (!task) {
//     return undefined;
//   }

//   return ({
//     name : task.name,
//     startDate : task?.created ? dayjs(task.created).format(DATE_FORMAT) : undefined,
//     endDate ?: task?.deadline ? dayjs(task.deadline).format(DATE_FORMAT) : undefined,
//     tags : 
//   })
// }

export const TaskDrawer = ({task, ...props}: TaskDrawerProps) => {
  const form = useForm<TaskSchemaType>({
    resolver: zodResolver(TaskSchema)
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
