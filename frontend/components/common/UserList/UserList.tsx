import { Text } from "../Text/Text";
import { UserItem } from "./UserItem/UserItem";
import { Container, Header } from "./UserList.styles";
import { UserListProps } from "./UserList.types";

export const UserList = ({ header, users, onDeleteUser, rightContent }: UserListProps) => (
  <Container>
    {header ? (
      <Header>
        <Text>{header}</Text>
        {rightContent}
      </Header>
    ) : null}
    {users.map((user, key) => (
      <UserItem {...user} onDelete={() => onDeleteUser(key)} key={key} />
    ))}
  </Container>
);
