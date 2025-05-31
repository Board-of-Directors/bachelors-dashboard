import { EMPLOYEES_PAGE_URL, TABLES_PAGES_URL, TASKS_PAGE_URL } from "@/constants/common";
import { ListTodo, Table, Users } from "lucide-react";
import { NavbarItemProps } from "./NavbarItem/NavbarItem.types";

export const NAVBAR_ITEMS: NavbarItemProps[] = [
  {
    name: "Таблицы",
    href: TABLES_PAGES_URL,
    icon: <Table width={"20px"} />,
  },
  {
    name: "Доска задач",
    href: TASKS_PAGE_URL,
    icon: <ListTodo width={"20px"} />,
  },
  {
    name: "Список сотрудников",
    href: EMPLOYEES_PAGE_URL,
    icon: <Users width={"20px"} />,
  },
];
