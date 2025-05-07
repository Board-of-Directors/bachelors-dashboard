import { ReactNode } from "react";

interface GroupItem {
  label: string;
  icon: ReactNode;
  onClick: any;
}

interface GroupProps {
  header: string;
  items: GroupItem[];
}

export type { GroupItem, GroupProps };
