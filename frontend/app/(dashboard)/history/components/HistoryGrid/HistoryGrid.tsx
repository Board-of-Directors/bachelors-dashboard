"use client";

import { getAllChanges } from "@/api/request/history";
import { ResponseTableHistoryShort } from "@/api/request/history/types";
import { HistoryCard } from "@/components/common";
import { GET_HISTORY } from "@/constants";
import { SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { history } from "./HistoryGrid.data";
import { Loading } from "./HistoryGrid.loading";

export const HistoryGrid = () => {
  const { data } = useQuery<ResponseTableHistoryShort[]>({
    queryKey: GET_HISTORY,
    queryFn: getAllChanges,
  });

  return history ? (
    <SimpleGrid padding="28px 40px" width="100%" columns={2} gap="20px">
      {history.map((item) => (
        <HistoryCard {...item} key={item.name} />
      ))}
    </SimpleGrid>
  ) : (
    <Loading />
  );
};
