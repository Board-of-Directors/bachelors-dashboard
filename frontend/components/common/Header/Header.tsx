"use client"

import { Text } from "@/components/common/Text/Text";
import { ContentRow, HelperRow, Row } from "./Header.styles";
import { HeaderProps } from "./Header.types";

export const Header = ({
  header,
  helperContent,
  leftContent,
  rightContent,
  className,
}: HeaderProps) => (
  <Row className={className}>
    <ContentRow>
      {leftContent}
      <HelperRow>
        <Text as={"h1"} className={"text-[28px] font-bold whitespace-nowrap"}>
          {header}
        </Text>
        {helperContent}
      </HelperRow>
    </ContentRow>
    {rightContent}
  </Row>
);
