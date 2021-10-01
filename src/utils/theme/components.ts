import { ComponentStyleConfig, DeepPartial } from "@chakra-ui/react";

const Card: DeepPartial<ComponentStyleConfig> = {
  // The styles all Card have in common
  baseStyle: ({ colorMode }) => ({
    display: "flex",
    flexDirection: "column",
    background: `background.${colorMode}.card`,
    alignItems: "flex-start",
    gap: 6,
  }),

  variants: {
    sidebar: {
      backgorund: "red",
    },
    smooth: {
      padding: 6,
      borderRadius: "base",
      boxShadow: "md",
    },
    topbar: ({ colorMode }) => ({
      height: "75px",
      width: "100%",
      padding: 4,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }),
    itemCard: ({ colorMode }) => ({
      background: `background.${colorMode}.card`,
      width: "200px",
      marginRight: 8,
      borderRadius: "sm",
      boxShadow: "md",
      textAlign: "center",
      alignItems: "center",
      padding: "10px 0",
      border: "2px solid #fff",
      _hover: {
        boxShadow: "lg",
        cursor: "pointer",
        border: "2px solid #4299e1",
      },
    }),
    cardImg: ({ colorMode }) => ({
      width: "200px",
      height: "150px",
    }),
  },
  // The default variant value
  defaultProps: {
    variant: "smooth",
  },
};

const Text: DeepPartial<ComponentStyleConfig> = {
  // The styles all Card have in common
  baseStyle: {
    fontSize: "12px",
  },
  variants: {
    primary: ({ colorMode }) => ({
      color: `text.${colorMode}.primary`,
      fontSize: "16px",
    }),
    heading: ({ colorMode }) => ({
      color: `text.${colorMode}.primary`,
      fontSize: 24,
      fontWeight: "400",
      marginBottom: 2,
    }),
    secondary: ({ colorMode }) => ({
      color: "gray.500",
      fontSize: "16px",
    }),
    active: ({ colorMode }) => ({
      color: `text.${colorMode}.primary`,
      fontWeight: "600",
      fontSize: "16px",
    }),
  },
  // The default variant value
  defaultProps: {
    variant: "secondary",
  },
};

const Input: DeepPartial<ComponentStyleConfig> = {
  // The styles all Card have in common
  baseStyle: {
    fontSize: "12px",
  },
  variants: {
    search: ({ colorMode }) => ({
      field: {
        height: "40px",
        borderRadius: "md",
        width: "100%",
        background: `background.${colorMode}.card`,
        padding: 2,
        paddingLeft: 10,
        color: `text.${colorMode}.primary`,
        fontSize: 14,
      },
    }),
    default: ({ colorMode }) => ({
      field: {
        height: "40px",
        borderRadius: "md",
        background: `background.${colorMode}.1`,
        padding: 2,
        paddingLeft: 4,
        color: `text.${colorMode}.primary`,
      },
    }),
  },
  // The default variant value
  defaultProps: {
    variant: "default",
  },
};

const MenuButton = {
  // The styles all Card have in common
  baseStyle: {
    background: "none",
    outline: "none",
  },
  variant: {
    avatar: ({ colorMode }) => ({
      background: `background.${colorMode}.card`,
      __focus: {
        boxShadow: "none",
      },
    }),
  },
  defaultProps: {
    variant: "avatar",
  },
};

const Menu = {
  // The styles all Card have in common
  parts: ["menu", "item"],
  baseStyle: ({ colorMode }) => ({
    menu: {
      boxShadow: "lg",
      rounded: "md",
      flexDirection: "column",
      background: `background.${colorMode}.card`,
    },
    item: {
      fontWeight: "medium",
      lineHeight: "normal",
      color: `text.${colorMode}.secondary`,
      background: `background.${colorMode}.card`,
      __hover: {
        background: `background.${colorMode}.1`,
      },
    },
  }),

  variants: {},

  defaultProps: {
    variant: "default",
  },
};

const Link: DeepPartial<ComponentStyleConfig> = {
  baseStyle: {
    color: "gray.500",
    fontSize: 14,
    textDecorationLine: "none !important",
    border: "2px solid transparent",
    display: "block",
    fontWeight: 400,
  },
  variants: {
    default: {},
    nav: ({ colorMode }) => ({
      _hover: {
        color: "blue.400",
        borderRight: "4px solid #4299e1",
      },
      _focus: {
        outline: "none",
        boxShadow: "none",
      },
    }),
    navActive: ({ colorMode }) => ({
      color: "blue.400",
      borderRight: "4px solid #4299e1",
      _focus: {
        outline: "none",
        boxShadow: "none",
      },
    }),
  },
  defaultProps: {
    variant: "default",
  },
};

const Button: DeepPartial<ComponentStyleConfig> = {
  baseStyle: {
    background: "blue.400",
  },
  variants: {
    default: {
      background: "blue.400",
      color: "white",
      fontSize: 14,
      fontWeight: "400",
      padding: "0px 40px",
    },
  },
  defaultProps: {
    variant: "default",
  },
};

export const components = {
  Card,
  Text,
  Input,
  MenuButton,
  Menu,
  Link,
  Button,
};
