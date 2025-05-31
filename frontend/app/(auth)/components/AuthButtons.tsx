import { Button, Text } from "@/components/common";
import { GoogleIcon } from "@/components/icons";
import { AuthFormSchemaType } from "@/schemas";
import { HStack, VStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface AuthButtonsProps {
  onSubmit: (data: AuthFormSchemaType) => void;
  onGoogleSubmit: () => void;
}

export const AuthButtons = ({ onSubmit, onGoogleSubmit }: AuthButtonsProps) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<AuthFormSchemaType>();

  return (
    <VStack width="100%" gap="12px">
      <Button
        onClick={handleSubmit(onSubmit, console.log)}
        disabled={isSubmitting}
        className="w-full"
      >
        Войти
      </Button>
      <Button onClick={onGoogleSubmit} color="secondary" size="xl">
        <HStack gap="8px">
          <GoogleIcon />
          <Text>Войти с помощью Google</Text>
        </HStack>
      </Button>
    </VStack>
  );
};
