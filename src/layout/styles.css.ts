import { style } from "@vanilla-extract/css";
import { vars } from "@kalidao/reality";
import { pxGroteskScreen } from "@design/app.css";

export const layout = style({
  minHeight: "100vh",
  paddingRight: vars.space["5"],
  paddingLeft: vars.space["5"],
});

export const container = style({
  minHeight: "90vh",
  position: "relative",
});

export const header = style({
  minHeight: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: 10,
  gap: vars.space["2"],
  position: "relative",
});

export const logo = style({
  fontFamily: pxGroteskScreen,
  fontSize: vars.fontSizes["headingTwo"],
  borderBottom: `1px solid ${vars.colors.foreground}`,
  borderLeft: `1px solid ${vars.colors.foreground}`,
  paddingLeft: vars.space[2],
  paddingRight: vars.space[2],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: vars.lineHeights["1.25"],
  color: vars.colors.foreground,

  ":hover": {
    // 3d scale
    filter: "contrast(200%)",
    transform: "scale(1.1)",
  },
});

export const footer = style({
  minHeight: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
