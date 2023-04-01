import { framerContainerTheme } from "@/utils/themes";
import { Container, ThemeProvider } from "@mui/material";
import { ContainerProps } from "@mui/material/Container";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

const FramerContainer = motion(
  forwardRef<HTMLDivElement, ContainerProps>(function FramerContainer(
    props,
    ref
  ) {
    return (
      <ThemeProvider theme={framerContainerTheme}>
        <Container {...props} ref={ref} component={"section"} disableGutters>
          {props.children}
        </Container>
      </ThemeProvider>
    );
  })
);

export default FramerContainer;
