import { ListTodo, Table, Users } from "lucide-react";
import { NavbarItemProps } from "./NavbarItem/NavbarItem.types";

export const NAVBAR_ITEMS: NavbarItemProps[] = [
  {
    name: "Таблицы",
    href: "/tables",
    icon: <Table width={"20px"} />,
  },
  {
    name: "Доска задач",
    href: "/tasks",
    icon: <ListTodo width={"20px"} />,
  },
  {
    name: "Список сотрудников",
    href: "/settings",
    icon: <Users width={"20px"} />,
  },
];
