import { authUser } from "@/api/request/auth";
import { UserCredentials } from "@/api/request/auth/types";
import { Button, ControlledInput } from "@/components/common";
import { useToast } from "@/hooks/use-toast";
import { AuthFormSchema, AuthFormSchemaType } from "@/schemas";
import { VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

export const AuthForm = () => {
  const { toast } = useToast();
  const methods = useForm<AuthFormSchemaType>({
    resolver: zodResolver(AuthFormSchema),
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (fieldValues: FieldValues) => {
    authUser(fieldValues as UserCredentials)
      .then(() => console.log("user_is_auth"))
      .catch((error: AxiosError) =>
        toast({
          title: error.response.data as string,
          variant: "destructive",
        }),
      );
  };

  return (
    <FormProvider {...methods}>
      <VStack width="100%" gap="32px">
        <ControlledInput name="email" placeholder="Введите логин" label="Логин" />
        <ControlledInput name="password" placeholder="Введите пароль" label="Пароль" />
        <Button onClick={handleSubmit(onSubmit, console.log)} className="w-full">
          Войти
        </Button>
      </VStack>
    </FormProvider>
  );
};
