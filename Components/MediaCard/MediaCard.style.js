import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ shape, spacing, shadows, palette, typography, transitions }) => ({
    container: {
      height: "100%",
      display: "flex",
      boxShadow: shadows[6],
      flexDirection: "column",
      borderRadius: shape.borderRadius,
      transition: transitions.create("all"),

      "&:hover": {
        transform: "scale(0.99)",
      },
    },
    imageContainer: {
      width: "100%",
      height: "100%",
      minHeight: 320,
      display: "flex",
      position: "relative",
      borderRadius: shape.borderRadius,
    },
    image: {
      opacity: 0.6,
      width: "100%",
      height: "100%",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: shape.borderRadius,
      borderTopRightRadius: shape.borderRadius,
      transition: transitions.create("all", { duration: 400 }),

      "&:before": {
        content: '""',
        width: "100%",
        height: "100%",
        display: "block",
        position: "absolute",
        mixBlendMode: "screen",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: shape.borderRadius,
        borderTopRightRadius: shape.borderRadius,
        backgroundColor: alpha(palette.primary.main, 0.18),
        transition: transitions.create("all", { duration: 180 }),
      },

      "&:hover:before, &:hover": {
        opacity: 1,
        backgroundColor: "transparent",
      },
    },
    info: {
      margin: "auto",
      padding: spacing(2),
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: palette.background.paper,
      borderBottomLeftRadius: shape.borderRadius,
      borderBottomRightRadius: shape.borderRadius,
    },
    titleContainer: {
      flexWrap: "nowrap",

      "& .titleGrid": {
        overflow: "hidden",
      },
    },
    title: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontWeight: typography.fontWeightBold,
    },
  }),
  { name: "MediaCard" }
);
