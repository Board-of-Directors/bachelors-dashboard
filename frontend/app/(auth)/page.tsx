"use client";

import { HStack, VStack } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import { AuthForm } from "./components/AuthForm";

const AUTH_IMAGE = "/auth_image.png";

const AuthPage = () => (
  <HStack width="100%" alignItems="center" paddingX="">
    <Image
      classNames={{ img: "rounded-none w-[120vw] h-screen object-cover" }}
      alt="Изображение студенческого кампуса НГУ"
      src={AUTH_IMAGE}
    />
    <VStack gap="40px" width="100%" paddingX="114px">
      <Image src="/fit_full_logo.svg" alt="Логотип ФИТ" width="324px" />
      <AuthForm />
    </VStack>
  </HStack>
);

export default AuthPage;
