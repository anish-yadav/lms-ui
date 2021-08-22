const Card = {
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
      paddingTop: 8,
      paddingLeft: 4,
      paddingRight: 4,
      boxShadow: "xl",
      width: "250px",
      position: "fixed",
      height: "100vh",
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
    nav: ({ colorMode }) => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 4,
      borderRadius: "md",
      width: "100%",
      cursor: "pointer",
      fontWeight: "400",
    }),
    navActive: ({ colorMode }) => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 4,
      borderRadius: "md",
      background: `background.${colorMode}.1`,
      width: "100%",
      cursor: "pointer",
      fontWeight: "600",
    }),
  },
  // The default variant value
  defaultProps: {
    variant: "smooth",
  },
};

const Text = {
  // The styles all Card have in common
  baseStyle: {
    fontSize: "12px",
  },
  variants: {
    primary: ({ colorMode }) => ({
      color: `text.${colorMode}.primary`,
      fontSize: "16px",
    }),
    secondary: ({ colorMode }) => ({
      color: `text.${colorMode}.secondary`,
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

const Input = {
  // The styles all Card have in common
  baseStyle: {
    fontSize: "12px",
  },
  variants: {
    search: ({ colorMode }) => ({
      field: {
        height: "40px",
        borderRadius: "md",
        width: "600px",
        background: `background.${colorMode}.1`,
        padding: 2,
        paddingLeft: 10,
        color: `text.${colorMode}.primary`,
      },
    }),
  },
  // The default variant value
  defaultProps: {
    variant: "search",
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

export const components = {
  Card,
  Text,
  Input,
  MenuButton,
  Menu,
};
