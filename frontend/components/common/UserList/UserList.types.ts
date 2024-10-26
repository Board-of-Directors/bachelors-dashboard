import { ReactNode } from "react";
import { UserItemProps } from "./UserItem/UserItem.types";

export type UserItem = Omit<UserItemProps, "onDelete">;

export interface UserListProps {
    users: UserItem[];
    onDeleteUser: (index: number) => void;
    rightContent?: ReactNode;
    header?: string;
}