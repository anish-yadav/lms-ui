import {
  Box,
  BoxProps,
  CloseButton,
  Divider,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, ReactText } from "react";
import { IconType } from "react-icons";
import {
  FiCompass,
  FiHome,
  FiLogOut,
  FiServer,
  FiSettings,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, to: "/" },
  { name: "Trending", icon: FiTrendingUp, to: "/course" },
  { name: "Explore", icon: FiCompass, to: "/message" },
  { name: "Manage", icon: FiServer, to: "/manage" },
  { name: "Settings", icon: FiSettings, to: "/404" },
];

export default function Sidebar({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hidden =
    location.pathname === "/login" ||
    location.pathname === "/forgot" ||
    location.pathname === "/reset";
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        hidden={hidden}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen && hidden}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Box ml={{ base: 0, md: hidden ? 0 : 48 }}>{children}</Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      // transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "48" }}
      pos="fixed"
      h="full"
      justifyContent="space-between"
      {...rest}>
      <Flex direction="column" justifyContent="space-between" h="inherit">
        <Flex direction="column">
          <Flex h="20" px="4" alignItems="center" justifyContent="space-between">
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              Logo
            </Text>
            <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
          </Flex>
          {LinkItems.map((link) => (
            <NavItem to={link.to} key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
          <Divider />
        </Flex>

        <Flex direction="column">
          <Link as={ReactRouterLink} to={"/profile"}>
            <Flex align="center" py="2" pl="4">
              <Icon mr="6" fontSize="16" as={FiUser} />
              Account
            </Flex>
          </Link>
          <Link as={ReactRouterLink} to={"/profile"}>
            <Flex align="center" py="2" pl="4" color="red.400">
              <Icon mr="6" fontSize="16" as={FiLogOut} />
              Logout
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  to: string;
  children: ReactText;
}
const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
  const loc = useLocation();
  const path = loc.pathname;
  return (
    <Link variant={path === to ? "navActive" : "nav"} my="2" as={ReactRouterLink} to={to}>
      <Flex align="center" py="2" pl="4">
        {icon && <Icon mr="6" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
