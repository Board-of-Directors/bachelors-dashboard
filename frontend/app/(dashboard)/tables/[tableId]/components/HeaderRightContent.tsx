import { Button, SelectItem } from "@/components/common";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useTablePageContext } from "../page.context";
import { Container } from "./HeaderRightContent.styles";

interface HeaderRightContentProps {
  tableSchema: any;
}

export const HeaderRightContent = ({ tableSchema }: HeaderRightContentProps) => {
  const [tokens, setTokens] = useState<SelectItem[]>([]);
  const { setFilters } = useTablePageContext();

  // TODO В отдельную функцию + тесты
  const handleSetFilters = () => {
    let currentToken: SelectItem | null = null;

    const filters = tokens.reduce((acc, token, index) => {
      if (index % 3 === 0) {
        if (acc[token.label] === undefined) {
          acc[token.label] = "";
        }
        currentToken = token;
      } else {
        acc[currentToken.label] = acc[currentToken.label] + token.label + ",";
      }
      return acc;
    }, {});

    setFilters(filters);
  };

  return (
    <Container>
      <>FilterAutoComplete</>
      <Button onClick={handleSetFilters} className="h-full gap-3">
        <SearchIcon className="text-white flex-shrink-0 size-[16px]" />
        Искать
      </Button>
    </Container>
  );
};
