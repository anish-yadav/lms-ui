import { Box, Text, useStyleConfig } from "@chakra-ui/react";
import { BsBell, BsChat, BsGear, BsGrid } from "react-icons/bs";
import { IoMdBook } from "react-icons/io";

export const Sidebar = () => {
  const styles = useStyleConfig("Card", { variant: "sidebar" });
  const navStyle = useStyleConfig("Card", { variant: "nav" });
  const navActiveStyle = useStyleConfig("Card", { variant: "navActive" });

  return (
    <Box __css={styles}>
      <Box __css={navActiveStyle}>
        <Text variant="active" mr={2}>
          <BsGrid />
        </Text>
        <Text variant="primary">Dashboard</Text>
      </Box>

      <Box __css={navStyle}>
        <Text variant="secondary" mr={2}>
          <IoMdBook />
        </Text>
        <Text variant="secondary">Courses</Text>
      </Box>

      <Box __css={navStyle}>
        <Text variant="secondary" mr={2}>
          <BsChat />
        </Text>
        <Text variant="secondary">Messages</Text>
      </Box>

      <Box __css={navStyle}>
        <Text variant="secondary" mr={2}>
          <BsBell />
        </Text>
        <Text variant="secondary">Notifications</Text>
      </Box>

      <Box __css={navStyle}>
        <Text variant="secondary" mr={2}>
          <BsGear />
        </Text>
        <Text variant="secondary">Settings</Text>
      </Box>
    </Box>
  );
};
