/**
 * Main component
 * @param {boolean} open - The open state of the drawer
 * @param {number} drawerWidth - The width of the drawer
 * @returns {React.ReactElement}
 */

import * as React from "react";
import { styled } from "@mui/material/styles";

const Main = styled("main", { shouldForwardProp: (prop: PropertyKey) => !["open", "drawerWidth"].includes(prop as string) })<{
  open?: boolean;
  drawerWidth: number;
}>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default Main;
