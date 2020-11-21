import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import useOutlineCardsStyles from "./OutlinedCards.style";

const OutlineCards = ({
  color,
  title,
  link,
  subtitle,
  caption,
  description,
}) => {
  const styles = useOutlineCardsStyles({ color });
  return (
    <Box sx={{ width: "100%" }} className={styles.container}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>

        {link && (
          <Grid item>
            <IconButton
              href={link}
              component="a"
              color="inherit"
              target="_blank"
              disableFocusRipple
              rel="noopener noreferrer"
              aria-label={`${title.toLowerCase()}-project-link`}
            >
              <CallMadeIcon fontSize="small" />
            </IconButton>
          </Grid>
        )}
      </Grid>

      {subtitle && (
        <Grid item>
          <Typography color="primary" gutterBottom variant="subtitle2">
            {subtitle}
          </Typography>
        </Grid>
      )}

      {caption && (
        <Grid item>
          <Typography variant="body2" gutterBottom color="textSecondary">
            {caption}
          </Typography>
        </Grid>
      )}

      {description &&
        description.map((v, i) => {
          const isString = typeof v === "string";
          const isElement = typeof v === "object";
          return (
            <Grid item key={`${v}-${i}`}>
              {isString && <Typography variant="body2">- {v}</Typography>}

              {isElement && v}
            </Grid>
          );
        })}
    </Box>
  );
};

OutlineCards.propTypes = {
  link: PropTypes.string,
  color: PropTypes.string,
  caption: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ),
};

export default OutlineCards;
