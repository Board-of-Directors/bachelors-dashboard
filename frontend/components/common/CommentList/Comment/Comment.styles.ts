import { Box, Image, SystemStyleObject, chakra } from "@chakra-ui/react";

const avatarBaseStyle: SystemStyleObject = {
  width: "36px",
  height: "36px",
  flexShrink : 0,
  borderRadius: "50%",
};

const Container = chakra(Box, {
  baseStyle: {
    width: "100%",
    display: "inline-flex",
    gap: "16px",
  },
});

const UserAvatar = chakra(Image, {
  baseStyle: {
    ...avatarBaseStyle,
    objectFit: "cover",
  },
});

const DefaultAvatar = chakra(Box, {
  baseStyle: {
    ...avatarBaseStyle,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    background: "#f3f3f3",
  },
});

const Column = chakra(Box, {
  baseStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
});

const InfoRow = chakra(Box, {
  baseStyle: {
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
  },
});

const Circle = chakra(Box, {
  baseStyle: {
    width: "5px",
    height: "5px",
    display : 'block',
    borderRadius: "50%",
    background: "#c7c4c4",
  },
});

export { Container, UserAvatar, DefaultAvatar, Column, InfoRow, Circle };
