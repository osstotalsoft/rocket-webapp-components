import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import Card from "../Card";
import imageCardStyle from "./imageCardStyle";

const useStyles = makeStyles(imageCardStyle);

function ImageCard({ children, image, imageSize, alternateText, ...rest }) {
  const classes = useStyles();

  return (
    <Card {...rest}>
      <Grid container justify="center">
        <img
          className={classes.image + " " + classes[imageSize]}
          src={image}
          alt={alternateText}
        />
      </Grid>
      {children}
    </Card>
  );
}

ImageCard.defaultProps = {
  imageSize: "s"
};

ImageCard.propTypes = {
  /**
  * Override or extend the styles applied to the component
  */
  className: PropTypes.string,
  /**
  * The content of the card
  */
  children: PropTypes.node,
  /**
  * The image to be displayed
  */
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
  * If the image cannot be displayed for some reason, this text will be shown
  */  alternateText: PropTypes.string,
  /**
  * The color of the card
  */
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  /**
  * The size of the image
  */
  imageSize: PropTypes.oneOf(["s", "m", "l"])
};

export default ImageCard;
