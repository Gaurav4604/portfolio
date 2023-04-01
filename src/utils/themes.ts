import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

export const rootTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            [theme.breakpoints.up("lg")]: {
              maxWidth: "100vw",
            },
            [theme.breakpoints.up("md")]: {
              maxWidth: "100vw",
            },
          }),
      },
    },
  },
});

export const overviewTheme = deepmerge(
  createTheme({
    components: {
      MuiContainer: {
        variants: [
          {
            props: { id: "layout-root" },
            style: ({ theme }) =>
              theme.unstable_sx({
                width: "100vw",
                height: "100vh",
                bgcolor: "#080808",
                display: "grid",
                p: "1.5rem",
                gridTemplate: `
              "a a a a b b b" 1fr
              "a a a a b b b" 1fr
              "a a a a b b b" 1fr
              "c c c c d d d" 1fr
              "c c c c d d d" 1fr
        `,
                [theme.breakpoints.down("md")]: {
                  gridTemplate: `
                  "a" 1fr
                  "b" 1fr
                  "c" 1fr
                  "d" 1fr
                `,
                },
                gap: "1.5rem",
              }),
          },
          {
            props: {
              id: "layout-caption-skills",
            },
            style: ({ theme }) =>
              theme.unstable_sx({
                gridArea: "a",
                gridTemplate: `
          "a a a" 1fr
          "a a a" 1fr
          "b c d" 1fr
        `,
              }),
          },
          {
            props: {
              id: "layout-profile-socials",
            },
            style: ({ theme }) =>
              theme.unstable_sx({
                gridArea: "b",
                gridTemplate: `
            "a a" 1fr
          `,
              }),
          },
          {
            props: {
              id: "layout-projects",
            },
            style: ({ theme }) =>
              theme.unstable_sx({
                gridArea: "c",
                gridTemplate: `
            "a a" 1fr
          `,
              }),
          },
          {
            props: {
              id: "layout-about",
            },
            style: ({ theme }) =>
              theme.unstable_sx({
                gridArea: "d",
                gridTemplate: `
            "a a" 1fr
          `,
              }),
          },
        ],
      },
    },
  }),
  rootTheme
);

export const framerContainerTheme = deepmerge(
  overviewTheme,
  createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          root: ({ theme }) => {
            return theme.unstable_sx({
              [theme.breakpoints.up("lg")]: {
                maxWidth: "100vw",
              },
              [theme.breakpoints.up("md")]: {
                maxWidth: "100vw",
              },
              bgcolor: "#111",
              display: "grid",
              borderRadius: "2rem",
              p: "1rem",
            });
          },
        },
      },
    },
  })
);
