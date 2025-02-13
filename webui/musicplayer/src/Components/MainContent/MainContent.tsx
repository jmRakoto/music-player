import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import Filter from "../Filter";

const Title = styled.div`
  font-family: RockfordSansBold;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 36px;
  color: ${(props) => props.theme.colors.text};
`;

const Header = styled.div`
  padding-left: 26px;
`;

export type MainContentProps = {
  title?: string;
  placeholder?: string;
  children?: ReactNode;
  displayHeader?: boolean;
};

const MainContent: FC<MainContentProps> = ({
  title,
  placeholder,
  children,
  displayHeader,
}) => {
  return (
    <div>
      {displayHeader && (
        <Header>
          <Title>{title}</Title>
          <Filter placeholder={placeholder} />
        </Header>
      )}

      {children}
    </div>
  );
};

MainContent.defaultProps = {
  placeholder: "Filter Tracks",
  displayHeader: true,
};

export default MainContent;
