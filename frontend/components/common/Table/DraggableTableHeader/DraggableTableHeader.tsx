import { filter, Text } from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { flexRender } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, EyeIcon, MenuIcon, MoreVerticalIcon, XCircle } from "lucide-react";
import { CSSProperties, useEffect, useState } from "react";
import { ColumnTooltip } from "../ColumnTooltip/ColumnTooltip";
import { GroupProps } from "../ColumnTooltip/Group/Group.types";
import { useTableContext } from "../Table.context";
import { ColumnHeader, IconWrapper, Row } from "./DraggableTableHeader.styles";
import { DraggableTableHeaderProps } from "./DraggableTableHeader.types";
import { useTablePageContext } from "@/app/(dashboard)/tables/[tableId]/page.context";

export const DraggableTableHeader = ({ header }: DraggableTableHeaderProps) => {
  const { filters } = useTablePageContext();
  const { hiddenColumns, columns } = useTableContext();

  const [columnFilters, setColumnFilters] = useState<any>();
  const { attributes, isDragging, listeners, setNodeRef, transform } = useSortable({
    id: header.column.id,
  });

  const filterValue = header.column.getFilterValue();
  const isHiddenColumn = header.column.columnDef.id === "hiddenColumns";
  const isIDColumn = header.column.columnDef.id === "id";
  const hiddenColumnsLength = Object.keys(hiddenColumns)?.length;

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: "relative",
    transform: CSS.Translate.toString(transform),
    transition: "width transform 0.2s ease-in-out",
    whiteSpace: "nowrap",
    width: `calc(var(--header-${header?.id}-size) * 1px)`,
    zIndex: isDragging ? 1 : 0,
  };

  const groups: GroupProps[] = [
    {
      header: "Действия",
      items: [
        {
          icon: <EyeIcon />,
          label: "Скрыть колонку",
          onClick: header.column.getToggleVisibilityHandler(),
        },
      ],
    },
    {
      header: "Сотрировать",
      items: [
        {
          icon: <ArrowUp />,
          label: "По возрастанию",
          onClick: () => header.column.toggleSorting(false),
        },
        {
          icon: <ArrowDown />,
          label: "По убыванию",
          onClick: () => header.column.toggleSorting(true),
        },
        {
          icon: <XCircle />,
          label: "Сбросить",
          onClick: () => header.column.clearSorting(),
        },
      ],
    },
  ];

  useEffect(() => {
    if (filters) {
      const currentColumn = columns.find((column) => column.id === header.column.id);
      const columnHeader = (currentColumn as any)?.header();

      if (columnHeader && filters[columnHeader]?.length > 0) {
        const columnFilter = filters[columnHeader];
        header.column.setFilterValue(columnFilter);
      } else {
        header.column.setFilterValue("");
      }
    }
  }, [filters]);

  return (
    <ColumnHeader isDragging={isDragging} id={header.column.id} style={style}>
      <Row>
        {flexRender(header.column.columnDef.header, header.getContext())}
        {isHiddenColumn ? (
          <Text className="text-indicator-info cursor-pointer">
            {"Скрытые колонки ("}
            {hiddenColumnsLength}
            {")"}
          </Text>
        ) : isIDColumn ? null : (
          <>
            <ColumnTooltip groups={groups} placement="bottom-start">
              <IconWrapper>
                <MoreVerticalIcon className={"size-[16px] text-icon-gray"} />
              </IconWrapper>
            </ColumnTooltip>
            <IconWrapper ref={setNodeRef} {...attributes} {...listeners}>
              <MenuIcon className={"size-[16px] text-icon-gray"} />
            </IconWrapper>
          </>
        )}
        <div
          className={`resizer ${header.column.getIsResizing() ? "isResizing" : ""}`}
          onDoubleClick={header.column.resetSize}
          onTouchStart={header.getResizeHandler()}
          onMouseDown={header.getResizeHandler()}
        />
      </Row>
    </ColumnHeader>
  );
};
