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
    },
    smooth: {
      padding: 6,
      borderRadius: "base",
      boxShadow: "md",
    },
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

export const components = {
  Card,
  Text,
};
