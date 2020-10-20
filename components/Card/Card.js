import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "./cardStyle";

const useStyles = makeStyles(cardStyle);

export default function Card({ className, color, children }) {
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true,
    [classes[color]]: color,
    [className]: className !== undefined
  });

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
}

Card.propTypes = {
  /**
  * The className of card.
  */
  className: PropTypes.string,
  /**
     * The color of card.
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
  * The content of card.
  */
  children: PropTypes.node
};