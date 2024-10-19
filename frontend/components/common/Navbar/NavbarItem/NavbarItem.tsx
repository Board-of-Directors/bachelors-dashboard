import { NavbarItem as NextNavbarItem } from "@nextui-org/react";
import { NavbarItemProps } from "./NavbarItem.types";
import { cn } from "@/utils/cn";
import { StyledLink } from "@/components/common/Navbar/NavbarItem/NavbarItem.styles";

export const NavbarItem = ({ isActive, icon, name, href, ...props }: NavbarItemProps) => (
  <NextNavbarItem {...props}>
    <StyledLink
      className={"flex flex-row items-center py-8 gap-3 group"}
      isActive={isActive}
      href={href}
      {...props}
    >
      <div
        className={cn(
          isActive ? "text-indicator-warning" : "text-icon-gray",
          "group-hover:text-indicator-warning",
        )}
      >
        {icon}
      </div>
      <p className={"font-medium text-text-back"}>{name}</p>
    </StyledLink>
  </NextNavbarItem>
);
