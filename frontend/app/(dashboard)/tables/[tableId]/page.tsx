"use client"

import { getTableById } from "@/api/request/table";
import { Header } from "@/components/common";
import { GET_TABLE_BY_ID } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HeaderRightContent } from "./components/HeaderRightContent";
import { TablePageContextProvider } from "./components/TablePageContextProvider";

const TablePage = ({params : {tableId}} : {params : {tableId : number}}) => {
    const [filters, setFilters] = useState<any>();

    const {data, isLoading} = useQuery({
        queryKey : [...GET_TABLE_BY_ID, tableId],
        queryFn : () => getTableById(tableId)
    })

    if (isLoading || !data) {
        return (<>Loading..</>)
    }

    return (
        <TablePageContextProvider filters={filters} setFilters={setFilters}>
        <Header
          rightContent={<HeaderRightContent tableSchema={[]} />}
          className={"px-10 py-7 justify-between"}
          header={"Test Table"}
        />
        <>Table</>
      </TablePageContextProvider>
    )
}

export default TablePage;