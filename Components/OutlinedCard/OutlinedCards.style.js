import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ shape, spacing, shadows, palette }) => ({
    container: ({ color = palette.primary.main }) => ({
      boxShadow: shadows[3],
      padding: spacing(1, 2),
      borderLeft: `4px solid ${color}`,
      borderRadius: shape.borderRadius * 2,
      backgroundColor: palette.background.paper,
    }),
  }),
  { name: "OutlinedCard" }
);
