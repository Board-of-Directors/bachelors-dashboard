import { Ids, ResponseTableDetail, ResponseTableRow } from "@/api/request/table/types";
import {
  ColumnType,
  ResponseTable,
  TableRow,
  TableSchema,
  Table as TableType,
} from "@/types/table";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { ColumnDef, createColumnHelper, Row, Table } from "@tanstack/react-table";

type CellValue = number | string | boolean;
type CompareFunction<T extends CellValue> = (fst: T, snd: T) => boolean;

const getMinSize = (accessorKey: string) => {
  switch (accessorKey) {
    case "id": {
      return 100;
    }
    case "column_1": {
      return 400;
    }
    default: {
      return 300;
    }
  }
};

const compareNumbers = (sign: string): CompareFunction<number> => {
  switch (sign) {
    case "=": {
      return (fst, snd) => fst === snd;
    }
    case "≠": {
      return (fst, snd) => fst !== snd;
    }
    case "<": {
      return (fst, snd) => fst < snd;
    }
    case "≤": {
      return (fst, snd) => fst <= snd;
    }
    case ">": {
      return (fst, snd) => fst > snd;
    }
    case "≥": {
      return (fst, snd) => fst >= snd;
    }
  }
};

const compareStrings = (sign: string): CompareFunction<string> => {
  switch (sign) {
    case "=": {
      return (fst, snd) => fst.includes(snd);
    }
    case "≠": {
      return (fst, snd) => !fst.includes(snd);
    }
  }
};

const compareBooleans = (sign: string): CompareFunction<boolean> => {
  switch (sign) {
    case "=": {
      return (fst, snd) => Boolean(fst) === Boolean(snd);
    }
    case "≠": {
      return (fst, snd) => Boolean(fst) !== Boolean(snd);
    }
  }
};

const compareMapper = (type: CellValue, sign: string): CompareFunction<CellValue> => {
  switch (typeof type) {
    case "string": {
      return compareStrings(sign);
    }
    case "number": {
      return compareNumbers(sign);
    }
    case "boolean": {
      return compareBooleans(sign);
    }
  }
};

const proccessDisjunction = (tokens: string[], cell: CellValue): boolean => {
  let compareResult: boolean = true;

  for (let index = 0; index < tokens.length; index += 2) {
    const nextValue = typeof cell === "number" ? Number(tokens[index + 1]) : tokens[index + 1];

    const compareFunction = compareMapper(cell, tokens[index]);
    compareResult = compareResult && compareFunction(cell, nextValue);
  }

  return compareResult;
};

/**
 * Function **filterFunction** filters current ROW by COLUMN's filters.
 *
 * @param row - current filtering table row
 * @param columnId - current filtering column id
 * @param filterValue - current filter value
 *
 * @returns true if ROW is satisfied filters of the COLUMN, false otherwise
 */
const filterFunction = (row: Row<TableRow>, columnId: string, filterValue: string): boolean => {
  const value: CellValue = row.original.applicant[columnId];
  const tokenArray = filterValue.split(",").filter(Boolean);

  return proccessDisjunction(tokenArray, value);
};

/**
 * Function **toColumns** convert table schema from API to "React Table" column-schema.
 *
 * @returns converted column-schema
 */
const toColumns = ({ schema }: ResponseTable): ColumnDef<TableRow, any>[] => {
  const columnHelper = createColumnHelper<any>();

  return schema.map(({ accessorKey, header }) =>
    columnHelper.accessor((row) => row.applicant[accessorKey], {
      header: () => header,
      cell: (info) => info.getValue(),
      id: accessorKey,
      minSize: getMinSize(accessorKey),
      filterFn: filterFunction,
    }),
  ) as unknown as ColumnDef<TableRow, any>[];
};

/**
 * Function **createIdsFromColumns** gets array of columns' names and returns array of columns' indexes.
 *
 * @returns array of columns' indexes
 */
const createIdsFromColumns = (columns: string[]): Ids => {
  const ids = columns.map((column) => {
    const underscroreIndex = column.indexOf("_");
    const columnIndex = column.slice(underscroreIndex + 1);

    return { id: Number(columnIndex) };
  });

  return { ids };
};

/**
 * Function **handleDragEnd** handles DragEndEvent and swaps items between using dispatch function.
 *
 * @returns swapped array
 */
const handleDragEnd = (event: DragEndEvent, columnOrder: string[]): string[] => {
  const { active, over } = event;

  if (active && over && active.id !== over.id) {
    const oldIndex = columnOrder.indexOf(active.id as string);
    const newIndex = columnOrder.indexOf(over.id as string);

    return arrayMove(columnOrder, oldIndex, newIndex);
  }

  return columnOrder;
};

const createColumnSizing = (table: Table<any>) => {
  const headers = table.getFlatHeaders();
  const colSizes: { [key: string]: number } = {};

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i]!;
    colSizes[`--header-${header.id}-size`] = header.getSize();
    colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
  }

  return colSizes;
};

/**
 * Function **getInsurance** returns value of the insurance of the current row if exists.
 *
 * @param row – current row.
 * @param table – current table.
 * @returns value of the row's insurance
 */
const getInsurance = (row: ResponseTableRow, table: ResponseTableDetail): string | undefined => {
  const insuranceColumn = table.columns.find((col) => col.isInsurance);

  if (insuranceColumn) {
    return row.items.find((cell) => cell.columnId === insuranceColumn.id)!.value;
  }
};

const transformTable = (responseTable: ResponseTableDetail): ResponseTable => {
  const schema: TableSchema = responseTable.columns.map(({ id, name, type }) => ({
    columnType: type.toLowerCase() as ColumnType,
    accessorKey: `column_${id}`,
    header: name,
  }));

  const schemaWithId: TableSchema = [
    {
      header: "ID",
      accessorKey: "id",
      columnType: "string",
    },
    ...schema,
  ];

  const table: TableType = {
    name: "Test Table",
    rows: responseTable.rows.map((row) => ({
      insurance: getInsurance(row, responseTable),
      applicant: {
        id: String(row.id),
        color: row.color,
        ...row.items.reduce((acc, item) => {
          acc[`column_${item.columnId}`] = item.value;

          return acc;
        }, {}),
      },
    })) as any,
  };

  return { schema: schemaWithId, table };
};

export { createColumnSizing, createIdsFromColumns, handleDragEnd, toColumns, transformTable };
