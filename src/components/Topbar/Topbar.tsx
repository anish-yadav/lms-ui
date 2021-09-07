import {
  Avatar,
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react";
import { FiMoon, FiSearch, FiSettings, FiSun, FiUser, FiVideo } from "react-icons/fi";
const SearchBar = () => {
  return (
    <InputGroup>
      {/* TODO: need to change the icon color text.colorMode.secondary */}
      <InputLeftElement children={<FiSearch fontSize="20px" />} />
      <Input variant="search" placeholder="Search for course by name, couse id or semester.." />
    </InputGroup>
  );
};

export const Topbar = () => {
  const styles = useStyleConfig("Card", { variant: "topbar" });
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box __css={styles}>
      <SearchBar />
      {/*if img present then image is shown otherwise names  */}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="avatar"
          icon={<Avatar size="sm" name="John Doe" src="https://bit.ly/dan-abramov-broken" />}
        />
        {/* TODO: need to bind the keyboard shortcuts */}
        <MenuList as="ul" bg={`background.${colorMode}.card`}>
          <MenuItem icon={<FiUser />} command="⌘T">
            Profile
          </MenuItem>
          <MenuItem icon={<FiVideo />} command="⌘N">
            Live Classes
          </MenuItem>
          <MenuItem
            icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
            onClick={toggleColorMode}
            command="⌘⇧N">
            Toggle Theme
          </MenuItem>
          <MenuItem icon={<FiSettings />} command="⌘O">
            Settings
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
