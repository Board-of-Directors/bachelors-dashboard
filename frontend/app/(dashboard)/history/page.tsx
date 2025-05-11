"use client";

import { getAllChanges } from "@/api/request/history";
import { ResponseTableHistoryShort } from "@/api/request/history/types";
import { Header, Input } from "@/components/common";
import { GET_HISTORY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { HistoryGrid } from "./components";

const HistoryPage = () => {
  const { data } = useQuery<ResponseTableHistoryShort[]>({
    queryKey: GET_HISTORY,
    queryFn: getAllChanges,
  });

  return (
    <>
      <Header
        rightContent={
          <Input
            endContent={<Search className="size-5 stroke-icon-gray" />}
            className="w-full max-w-[700px]"
            placeholder="Название таблицы"
          />
        }
        className="px-10 py-7 gap-10 justify-between"
        header="История изменений"
      />
      <HistoryGrid />
    </>
  );
};

export default HistoryPage;
