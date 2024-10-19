"use client";

import { Image, Navbar as NextNavbar, NavbarContent } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Logo from "@/public/logo.png";
import { NAVBAR_ITEMS } from "./Navbar.constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/common/Button/Button";
import { NavbarItem } from "@/components/common/Navbar/NavbarItem/NavbarItem";
import { LogOutIcon } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const currentIndex = NAVBAR_ITEMS.findIndex((item) => pathname.includes(item.href));

    setActiveIndex(currentIndex);
  }, [pathname]);

  return (
    <NextNavbar
      isBordered
      isBlurred={false}
      position="sticky"
      classNames={{
        wrapper: "px-10 justify-between h-fit w-full max-w-full bg-white",
        base: "justify-start bg-white",
      }}
    >
      <Image
        src={Logo.src}
        classNames={{
          wrapper: "flex-shrink-0",
        }}
        width="64px"
        alt={"Логотип ФИТ"}
      />
      <NavbarContent className="flex flex-row gap-8" justify="center">
        {NAVBAR_ITEMS.map(({ name, href, icon }, index) => (
          <NavbarItem
            name={name}
            href={href}
            icon={icon}
            isActive={activeIndex === index}
            key={href}
          />
        ))}
      </NavbarContent>
      <Button color="warning" size={"sm"}>
        <LogOutIcon size={"18px"} />
        Выйти
      </Button>
    </NextNavbar>
  );
};
