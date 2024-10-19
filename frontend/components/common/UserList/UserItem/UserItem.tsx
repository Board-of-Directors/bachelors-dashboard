import { Image } from "@chakra-ui/react";
import { UserRoundIcon } from "lucide-react";
import { Text } from "../../Text/Text";
import { Avatar, Cotainter, DeleteIcon, LeftRow } from "./UserItem.styles";
import { UserItemProps } from "./UserItem.types";

const UserAvatar = ({ photo }: Pick<UserItemProps, "photo">) => (
  <Avatar>
    {false ? (
      <Image
        width="100%"
        height="100%"
        borderRadius="50%"
        src={photo}
        alt={"Фотография пользователя"}
      />
    ) : (
      <UserRoundIcon className="text-icon-gray size-4" />
    )}
  </Avatar>
);

export const UserItem = ({ email, photo, onDelete }: UserItemProps) => (
  <Cotainter>
    <LeftRow>
      <UserAvatar photo={photo} />
      <Text className="text-text-gray">{email}</Text>
    </LeftRow>
    {onDelete ? <DeleteIcon className="deleteIcon" onClick={onDelete} /> : null}
  </Cotainter>
);
